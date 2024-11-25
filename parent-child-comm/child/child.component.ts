import { Component, EventEmitter, Input, Output, OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit{

  @Input()
  message:string='Not Fetched from Parent';

  ngOnInit(){
    console.log('message is',this.message);
  }

  @Output()
  messageFromChildEvent:EventEmitter<string>=new EventEmitter<string>();  

  messageToParent:string='Child to Parent Communication Successful';
  toParent(){
    this.messageFromChildEvent.emit(this.messageToParent)
  }

  
}
