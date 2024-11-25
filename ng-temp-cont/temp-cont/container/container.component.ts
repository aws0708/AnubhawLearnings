import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

  toggle:boolean=true;
  names:string[]=[
    'Anubhaw','Anjali','Vaishnavi','Chulbul','Vishal'
  ];
  namesUpper:string[]=[];
  isUpperCase:boolean=false;
  onToggle(){
    this.toggle=!this.toggle;
  }
  changeToUpper(){
    this.isUpperCase=true;
    this.namesUpper=this.names.map((name)=>{
      return name.toUpperCase();
    })

  }

}
