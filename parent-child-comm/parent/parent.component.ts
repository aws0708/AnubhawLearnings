import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  messageFromparent:string;
  recievedMessageFromChild:string;
  setMessage(){
      this.messageFromparent='Parent to Child Communication successful'
  }

  getMessageFromChild(value:any){
    this.recievedMessageFromChild=value;
  }

}
