import { Component, signal,OnInit,DoCheck } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent implements OnInit,DoCheck {

  // string, number, boolean, date

  courseName: string = "Angular 18";
  inputType = "radio";
  placeHolder = "Enter You Age";
  rollNumber: number = 27;
  isIndian: boolean = true;
  currentDate: Date = new Date();
  myClassName="bg-primary";
  stateName="Maharashtra";
  message1:string='Hello'

  name=signal("Anubhaw Singh")

  
 ngOnInit(){
 }
 ngDoCheck(): void {
  console.log(this.stateName);
 }


  showAlert(message:string){
    // alert(message);
    this.message1=message;
  }

  changeCourseName(){
    this.courseName="React JS";
  }

  changeName(){
    this.name.set("MS Dhoni");
  }
}
