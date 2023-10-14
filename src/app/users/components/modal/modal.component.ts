import {Component} from "@angular/core";
import {UsersService} from "../../state/users.service";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-modal',
  styleUrls: ['modal.component.scss'],
  templateUrl: 'modal.component.html'
})
export class ModalComponent {
  addUserForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    active: [false]
  })

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService) {
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
}
