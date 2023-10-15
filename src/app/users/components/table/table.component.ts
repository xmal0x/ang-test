import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {User} from "../../state/user.model";
import {UsersService} from "../../state/users.service";

@Component({
  templateUrl: 'table.component.html',
  styleUrls: ['table.component.scss'],
  selector: 'app-table',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent {
  @Input()
  users: {id: string, name: string, active: boolean}[] = []

  constructor(private usersService: UsersService) {
  }

  setActive(user: User) {
    this.usersService.setActive({...user, active: !user.active})
  }
}
