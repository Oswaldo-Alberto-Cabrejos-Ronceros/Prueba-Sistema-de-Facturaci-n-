import { Component, HostBinding, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-nav-item',
  imports: [RouterLink, RouterModule,CommonModule],
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.css',
})
export class NavItemComponent {
  @HostBinding('class') class = 'w-full';
  @Input() to: string = '';
  @Input() title: string = '';
  @Input() iconName: string = '';
  //para saber si esta deplegado o no
  @Input() isDisplayed:boolean=true
}
