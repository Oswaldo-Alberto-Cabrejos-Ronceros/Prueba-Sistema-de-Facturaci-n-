import {
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { CommonModule } from '@angular/common';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterModule,
} from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-nav-bar-drop-down',
  imports: [IconComponent, CommonModule, RouterLink, RouterModule],
  templateUrl: './nav-bar-drop-down.component.html',
  styleUrl: './nav-bar-drop-down.component.css',
})
export class NavBarDropDownComponent {
  @Input() options: { title: string; to: string }[] = [];

  //referencia del boton de apertura
  @ViewChild('buttonRef') buttonRef!: ElementRef;
  //referencia de la carta de opciones
  @ViewChild('cardOptionsRef') cardOptionsRef!: ElementRef;

  //opcion seleccionada
  optionSelected: number = 0;

  //inyectamos router
  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateOptionSelected();
      });
  }

  //metodo para actualizar optionSelected despues de terminar una navegacion
  updateOptionSelected() {
    const currentPath = this.router.url;
    const index = this.options.findIndex((opt) => opt.to === currentPath);
    if (index !== -1) {
      this.optionSelected = index;
    }
  }

  //bandera para ver o no el menu

  visible: boolean = false;

  //para menejar visible

  handleVisible() {
    this.visible = !this.visible;
  }

  //para cerrar si se hace click fuera de la carta de opciones

  //eventos click
  @HostListener('document:click', ['$event'])
  onOutsideClick(event: MouseEvent) {
    //referencia de click dentro
    const clickedInside = this.cardOptionsRef?.nativeElement.contains(
      event.target
    );
    //referencia de click dentro del elemento de apertura
    const clickedTrigger = this.buttonRef?.nativeElement.contains(event.target);
    if (!clickedInside && !clickedTrigger) {
      this.visible = false;
    }
  }
}
