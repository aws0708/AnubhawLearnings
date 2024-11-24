import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ifelse',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ifelse.component.html',
  styleUrl: './ifelse.component.css'
})
export class IfelseComponent {

  div1Visible:boolean=true;
  isWarnigColorDivVisible:boolean=false;
  num1:string='';
  num2:string='';
  selectedCountry:string='';

  showDiv1(){
    this.div1Visible=true;
  }
  hideDiv1(){
    this.div1Visible=false;
  }
  toggleDiv2Bg(){
    this.isWarnigColorDivVisible=!this.isWarnigColorDivVisible;
  }
}

