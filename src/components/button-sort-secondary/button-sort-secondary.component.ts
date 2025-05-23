import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-sort-secondary',
  imports: [CommonModule],
  templateUrl: './button-sort-secondary.component.html',
  styleUrl: './button-sort-secondary.component.css'
})
export class ButtonSortSecondaryComponent {
optionsIcons:string[]=[
   'expand_all',
  'arrow_drop_up',
  'arrow_drop_down'
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
