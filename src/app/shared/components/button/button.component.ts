import {Component, EventEmitter, Input, Output} from "@angular/core";

type ButtonType = 'button' | 'submit'
type ButtonSize = 'sm' | 'lg'

@Component({
  selector: 'app-button',
  templateUrl: 'button.component.html',
  styleUrls: ['button.component.scss']
})
export class ButtonComponent {
  @Input()
  text: string = ''

  @Input()
  type: ButtonType  = 'button'

  @Input()
  disabled = false

  @Output()
  onClick = new EventEmitter()

  @Input()
  size: ButtonSize  = 'sm'
}
