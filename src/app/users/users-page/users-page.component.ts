import {Component} from "@angular/core";
import {map, of} from "rxjs";
import {UsersQuery} from "../state/users.query";

@Component({
  templateUrl: 'users-page.component.html',
  selector: 'app-users',
  styleUrls: ['users-page.component.scss']
})
export class UsersPageComponent {
  private usersLimit = 5

  showModal = true

  users$ = this.usersQuery.users$

  isAddButtonEnabled$ = this.users$.pipe(
    map(users =>
      users.every(u => u.active)
      && users.length < this.usersLimit)
  )

  constructor(private usersQuery: UsersQuery) {
  }

  toggleModal = () => this.showModal = !this.showModal
}
