import { Component } from '@angular/core';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-sibling2',
  standalone: true,
  imports: [],
  templateUrl: './sibling2.component.html',
  styleUrl: './sibling2.component.css'
})
export class Sibling2Component {

  data:string='';
  dataBeh:string='';
  constructor(private commonService: CommonServiceService) {
    this.commonService.commonValue$.subscribe((dataFromSibling1: string) => {
      // debugger;
    this.data=dataFromSibling1;
    
    this.commonService.commonValue2$.subscribe((datafromSibling1Beh:string)=>{
      this.dataBeh=datafromSibling1Beh;
    })
    })
  }

}
