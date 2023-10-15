import {Component, OnDestroy, OnInit} from "@angular/core";
import {UsersService} from "../../state/users.service";
import {AbstractControl, FormBuilder, Validators} from "@angular/forms";
import {of, Subscription, switchMap, timer} from "rxjs";
import {UsersQuery} from "../../state/users.query";
//
// export function userNameValidator(
//   users$: Observable<User[]>
// ): AsyncValidatorFn {
//   return (control: AbstractControl) => {
//     return timer(500).pipe(
//       switchMap(() => of({sda:true})
//         // users$.pipe(map(users => {
//         //   console.log({users})
//         //   return of({asdasdf: true})
//         // }))
//       )
//     )
//   };
// }
//
// function asyncNameValidator(usersQuery: UsersQuery) {
//   return (control: AbstractControl) => {
//     return of(control.value).pipe(
//       switchMap(value => {
//     return timer(1000).pipe(
//       mergeMap(() =>
//         usersQuery.users$.pipe(
//           mergeMap(users => {
//             const res = users.some((u) => u.name.toLowerCase() === value.toLowerCase())
//             console.log({res, val: control.value})
//             return res ? of({'titleExist': true}) : of(null)
//           })
//         )
//       )
//     )
//   })
//   )
// }}


@Component({
  selector: 'app-modal',
  styleUrls: ['modal.component.scss'],
  templateUrl: 'modal.component.html'
})
export class ModalComponent implements OnInit, OnDestroy {
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
    //FIXME
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

    //FIXME
    this.usersService.add(name!, active || false)
    this.close()
    this.addUserForm.reset()
  }

  createAsyncValidator() {
    return (control: AbstractControl) => {
      return of(control.value).pipe(
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
}
