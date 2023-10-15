import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from "@angular/core";
import {NgClass} from "@angular/common";

type ButtonType = 'button' | 'submit'
type ButtonSize = 'sm' | 'lg'

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: 'button.component.html',
  styleUrls: ['button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
