import {EntityState, EntityStore, StoreConfig} from "@datorama/akita";
import {User} from "./user.model";
import {Injectable} from "@angular/core";

export interface UsersState extends EntityState<User> {
}

const initialState: UsersState = {
  entities: {
    '1': {id: '1', name: 'John Doe', active: true},
    '2': {id: '2', name: 'Jane Doe', active: true},
  },
  ids: ['1', '2']
}

@Injectable({
  providedIn: "root"
})
@StoreConfig({name: 'users'})
export class UsersStore extends EntityStore<UsersState> {
  constructor() {
    super(initialState);
  }
}

