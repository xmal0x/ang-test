import {Component} from '@angular/core';
import {map, of} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private usersLimit = 5

  users$ = of([
    {id: '1', name: 'John', active: true},
    {id: '1', name: 'John', active: true}
  ])

  isAddButtonEnabled$ = this.users$.pipe(
    map(users =>
      users.every(u =>
        u.active) && users.length < this.usersLimit)
  )
}
