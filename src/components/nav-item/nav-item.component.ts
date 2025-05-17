import { Component, HostBinding, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-nav-item',
  imports: [RouterLink, RouterModule],
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.css',
})
export class NavItemComponent {
  @HostBinding('class') class = 'w-full';
  @Input() to: string = '';
  @Input() title: string = '';
  @Input() iconName: string = '';
}
