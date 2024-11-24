import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {
  div1BgColor: string = 'bg-danger';
  isDiv2Active: boolean = false;
  num1: string = '';
  num2: string = '';
  isActive: boolean = true;
  selectedCountry: string = '';
  studentList: any[] = [
    { studId: 12, name: 'AAA', totalMarks: 93, gender: 'male', city: 'Noida', isActive: false },
    { studId: 22, name: 'BBB', totalMarks: 56, gender: 'male', city: 'Gurgaon', isActive: true },
    { studId: 32, name: 'ACC', totalMarks: 33, gender: 'female', city: 'Delhi', isActive: false },
    { studId: 35, name: 'CCCC', totalMarks: 67, gender: 'male', city: 'Chandigarh', isActive: true },
    { studId: 77, name: 'KKK', totalMarks: 54, gender: 'female', city: 'Mussoorie', isActive: false },
    { studId: 62, name: 'FFF', totalMarks: 86, gender: 'male', city: 'Dehradun', isActive: true },
    { studId: 66, name: 'NNN', totalMarks: 85, gender: 'female', city: 'Rishikesh', isActive: true }
  ];

   customerStyle:any={
        'color':'white',
        'background-color':'black',
        'text-align':'center',
        'height':'200px',
        'border-radius':'5px',
        'display':'flex',
        'align-items':'center',
        'justify-content':'center'
   }

  //  we will need router object -- this is called Dependency Injection, the object of Router service is injectable
   constructor(private router:Router){
   }

   navigateToStructural(){
    this.router.navigateByUrl('struct-directive');
   }

  addRed() {
    this.div1BgColor = 'bg-danger';
  }
  addBlue() {
    this.div1BgColor = 'bg-primary';
  }
  toggleDiv2Class() {
    this.isDiv2Active = !this.isDiv2Active;
  }
  isCheckBoxActive() {
    this.isActive = !this.isActive;
  }

}
