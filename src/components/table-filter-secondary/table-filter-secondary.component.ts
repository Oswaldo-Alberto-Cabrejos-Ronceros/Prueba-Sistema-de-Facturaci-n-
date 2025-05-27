import { Component, ContentChild, HostBinding, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSecondaryComponent } from "../input-secondary/input-secondary.component";
import { ButtonSortSecondaryComponent } from "../button-sort-secondary/button-sort-secondary.component";
import { SelectSecondaryComponent } from "../select-secondary/select-secondary.component";

@Component({
  selector: 'app-table-filter-secondary',
  imports: [CommonModule, InputSecondaryComponent, ButtonSortSecondaryComponent, SelectSecondaryComponent],
  templateUrl: './table-filter-secondary.component.html',
  styleUrl: './table-filter-secondary.component.css'
})
export class TableFilterSecondaryComponent {
@HostBinding('class') class = 'overflow-x-auto';
//input para los datos
@Input() data: any[]= []
@Input() size:string='base' //puede ser base o sm
  @Input() columns: {
    key: string; //clave
    label: string; //titulo a mostrar
    typeFilter: string; //tipo de filtro 'input' o 'select'
    disable?: boolean // para desabilitar el filtro
    options?: {label:string,value:string|number}[];  //opciones en caso de select
    ordenable?: boolean;//si permite ordenamiento
    width?:string //para ancho de las columnas
  }[] = [];


// template para el encabezado

// template para las filas
@ContentChild('row',{static:true}) rowTemplate!:TemplateRef<any>;
}
