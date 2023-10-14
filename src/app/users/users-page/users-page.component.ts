import {Component} from "@angular/core";
import {map} from "rxjs";
import {UsersQuery} from "../state/users.query";
import {FormBuilder, Validators} from "@angular/forms";
import {UsersService} from "../state/users.service";

@Component({
  templateUrl: 'users-page.component.html',
  selector: 'app-users',
  styleUrls: ['users-page.component.scss']
})
export class UsersPageComponent {
  showModal = false
  addUserForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    active: [false]
  })

  private usersLimit = 5

  users$ = this.usersQuery.users$
  isAddButtonEnabled$ = this.users$.pipe(
    map(users =>
      users.every(u => u.active)
      && users.length < this.usersLimit)
  )

  constructor(
    private usersQuery: UsersQuery,
    private formBuilder: FormBuilder,
    private usersService: UsersService
  ) {
  }

  toggleModal = () => this.showModal = !this.showModal

  addNewUser = () => {
    const name = this.addUserForm.get('name')?.value
    const active = this.addUserForm.get('active')?.value

    //FIXME
    this.usersService.add(name!, active || false)
    this.toggleModal()
    this.addUserForm.reset()
  }
}
