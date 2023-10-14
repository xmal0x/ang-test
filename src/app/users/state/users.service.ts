import {Injectable} from "@angular/core";
import {UsersStore} from "./users.store";
import {createUser, User} from "./user.model";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private usersStore: UsersStore) {
  }

  add(name: string, active: boolean) {
    const user = createUser(name, active)
    this.usersStore.add(user)
  }

  setActive({id, active}: User) {
    this.usersStore.update(id, {active})
  }
}
