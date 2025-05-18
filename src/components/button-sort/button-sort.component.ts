import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-sort',
  imports: [CommonModule],
  templateUrl: './button-sort.component.html',
  styleUrl: './button-sort.component.css'
})
export class ButtonSortComponent {
optionsIcons:string[]=[
  'height',
  'north',
  'south'
]

icon:number=0

handleIcon=()=>{
  if(this.icon<2){
    this.icon=this.icon+1
  } else{
    this.icon=0
  }
}
}
