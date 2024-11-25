import { Component } from '@angular/core';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-sibling1',
  standalone: true,
  imports: [],
  templateUrl: './sibling1.component.html',
  styleUrl: './sibling1.component.css'
})
export class Sibling1Component {
  data1:string="Hello from sibling 1";
  data2:string="Hello From sibling 1 using Behaviour Subejct"
  constructor(private commonService:CommonServiceService){

  }
  sendData(){
    // emitting the value
      // debugger;
      this.commonService.commonValue$.next(this.data1);
  }
  sendDataBeh(){
    this.commonService.commonValue2$.next(this.data2);
  }

}
