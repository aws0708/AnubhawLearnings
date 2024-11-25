import { Component } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sibling3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sibling3.component.html',
  styleUrl: './sibling3.component.css'
})
export class Sibling3Component {

  data:string='';
  dataBeh:string='';
  constructor(private commonService:CommonServiceService){
    this.commonService.commonValue$.subscribe((dataFromSibling1)=>{
      // debugger;
      this.data=dataFromSibling1;

    this.commonService.commonValue2$.subscribe((datafromSibling1Beh:string)=>{
      this.dataBeh=datafromSibling1Beh;
    })

    })

  }
}
