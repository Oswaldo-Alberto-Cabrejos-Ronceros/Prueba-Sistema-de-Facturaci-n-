import {
  Component,
  HostBinding,
  Input,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface CardOption {
  key: string;
  label: string;
  template: TemplateRef<any>;
}

@Component({
  selector: 'app-card-options',
  imports: [CommonModule],
  templateUrl: './card-options.component.html',
  styleUrl: './card-options.component.css',
})
export class CardOptionsComponent implements OnInit {
  @HostBinding('class') class = 'min-w-full';
  //opciones para la carta
  @Input() options: CardOption[] = [];
  //opcion seleccionada
  selectedKey: string | null = null;

  //seleccionamos la primera opcion al iniciar
  ngOnInit(): void {
    if (this.options.length > 0) {
      this.selectedKey = this.options[0].key;
    }
  }
  //para seleccionar una opcion
  selectOption(key: string) {
    this.selectedKey = key;
  }

  //para saber si una opcion esta activa
  isActive(key: string) {
    return key === this.selectedKey;
  }
}
