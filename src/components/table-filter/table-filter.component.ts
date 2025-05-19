import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonSortComponent } from '../button-sort/button-sort.component';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-table-filter',
  imports: [CommonModule,ButtonSortComponent,IconComponent],
  templateUrl: './table-filter.component.html',
  styleUrl: './table-filter.component.css',
})
export class TableFilterComponent {
  @HostBinding('class') class = 'flex-1 overflow-x-auto';
  //inputs de columnas
  @Input() columns: {
    key: string;
    label: string;
    typeFilter: string;
    disable?: boolean
    options?: string[];
    ordenable?: boolean;
  }[] = [];
  @Input() data:any[]=[]
  //bandera que habilita los filtros
  @Input() filtersEnabled:boolean=false
  @Input() title:string='datos'
  //para informar al padre la activacion de los filtros
  @Output() enabled=new EventEmitter<void>()

  //funcion que habilita los filtros
  enableFilters=()=>{
    this.filtersEnabled=true
    //emitimos evento
    this.enabled.emit()
  }

}
