import {Component, Input} from "@angular/core";

@Component({
  templateUrl: 'table.component.html',
  styleUrls: ['table.component.scss'],
  selector: 'app-table'
})
export class TableComponent {
  @Input()
  users: {id: string, name: string, active: boolean}[] = []

}
