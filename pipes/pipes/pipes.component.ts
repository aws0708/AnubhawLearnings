import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, interval, map } from 'rxjs';
import { NaPipe } from '../na.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [NaPipe,AsyncPipe,JsonPipe,UpperCasePipe, LowerCasePipe, TitleCasePipe,DatePipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

  firstName: string = 'angular';
  myName: string = 'Anubhaw';
  titleName: string = 'Ramayan is majestic';
  currentDate: Date = new Date();
  student:any={
    name:'Chetan',
    city:'Pune',
    empId:323,
    state:''
  };

  currentTime:Observable<Date>=new Observable<Date>

  constructor(){
    
      this.currentTime=interval(1000).pipe(map(()=> new Date()))
    
  }

}
