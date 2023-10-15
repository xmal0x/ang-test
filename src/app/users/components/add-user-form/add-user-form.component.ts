import {Component, OnDestroy, OnInit} from "@angular/core";
import {UsersService} from "../../state/users.service";
import {AbstractControl, FormBuilder, Validators} from "@angular/forms";
import {of, Subscription, switchMap, timer} from "rxjs";
import {UsersQuery} from "../../state/users.query";

@Component({
  selector: 'app-form',
  styleUrls: ['add-user-form.component.scss'],
  templateUrl: 'add-user-form.component.html'
})
export class AddUserFormComponent implements OnInit, OnDestroy {
  addUserForm = this.formBuilder.group({
    name: ['', [Validators.required], [this.createAsyncValidator()]],
    active: [false]
  })
  userNames: string[] = []

  private sub?: Subscription

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private usersQuery: UsersQuery) {
  }

  ngOnInit() {
    this.sub = this.usersQuery.users$
      .subscribe(users =>
        this.userNames = users.map(u => u.name.toLowerCase()))
  }

  ngOnDestroy() {
    this.sub?.unsubscribe()
  }

  close() {
    this.usersService.setModal(false)
  }

  addNewUser = () => {
    const name = this.addUserForm.get('name')?.value
    const active = this.addUserForm.get('active')?.value

    this.usersService.add(name!, active || false)
    this.close()
    this.addUserForm.reset()
  }

  createAsyncValidator() {
    return (control: AbstractControl) =>
      of(control.value).pipe(
        switchMap(value =>
          timer(500).pipe(
            switchMap(() => {
              const name = value.toLowerCase()
              const exist = this.userNames.includes(name);
              return exist ? of({'notUnique': true}) : of(null);
            })
          ))
      )
  }
}
