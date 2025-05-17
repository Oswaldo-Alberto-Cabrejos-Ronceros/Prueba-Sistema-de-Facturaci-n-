import { CommonModule } from '@angular/common';
import { Component, ContentChild, HostBinding, TemplateRef } from '@angular/core';
import { ButtonIconLabelTerciaryComponent } from '../button-icon-label-terciary/button-icon-label-terciary.component';


@Component({
  selector: 'app-nav-bar-user',
  imports: [CommonModule,ButtonIconLabelTerciaryComponent],
  templateUrl: './nav-bar-user.component.html',
  styleUrl: './nav-bar-user.component.css'
})
export class NavBarUserComponent {
@HostBinding('class') class = 'w-full h-min';
//referencias de los templates
  @ContentChild('leftTemplate', { static: false }) leftTemplate!: TemplateRef<any>;
  @ContentChild('rightTemplate', { static: false }) rightTemplate!: TemplateRef<any>;

}
