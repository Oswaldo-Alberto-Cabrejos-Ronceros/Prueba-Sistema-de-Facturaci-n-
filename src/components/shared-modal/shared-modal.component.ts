import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-shared-modal',
  imports: [CommonModule],
  templateUrl: './shared-modal.component.html',
  styleUrl: './shared-modal.component.css',
})
export class SharedModalComponent {
  @Input() show = false;
  @Input() typeConfirm:boolean=false;
}
