import { Component, ContentChild, HostBinding, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-primary',
  imports: [CommonModule],
  templateUrl: './table-primary.component.html',
  styleUrl: './table-primary.component.css'
})
export class TablePrimaryComponent {
@HostBinding('class') class = 'flex-1 overflow-x-auto';
//input para los datos
@Input() data: any[]= []
//input para columnas
@Input() columns:{label:string,width?:string}[]=[]
@Input() size:string='full' //puede ser full o sm
@Input() align:string='center' // puede ser left o center

// template para las filas
@ContentChild('row',{static:true}) rowTemplate!:TemplateRef<any>;

}
