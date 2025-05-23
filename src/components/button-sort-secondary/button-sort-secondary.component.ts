import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-sort-secondary',
  imports: [CommonModule],
  templateUrl: './button-sort-secondary.component.html',
  styleUrl: './button-sort-secondary.component.css'
})
export class ButtonSortSecondaryComponent {

state:number=0
handleState=()=>{
  if(this.state<2){
    this.state=this.state+1
  } else{
    this.state=0
  }
}

}
