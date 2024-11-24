import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StructuralDirectiveComponent } from './components/directive/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './components/directive/attribute-directive/attribute-directive.component';
import { Sibling2Component } from './components/rxjs/subjBehavSubj/sibling2/sibling2.component';
import { Sibling1Component } from './components/rxjs/subjBehavSubj/sibling1/sibling1.component';
import { Sibling3Component } from './components/rxjs/subjBehavSubj/sibling3/sibling3.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet, AddEmployeeComponent, DataBindingComponent, EmployeeListComponent, FormsModule, CommonModule, RouterLink, StructuralDirectiveComponent, AttributeDirectiveComponent],
  imports:[RouterOutlet,RouterLink,CommonModule,Sibling2Component,Sibling1Component,Sibling3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_18_tutorial';

  courseName: string = "angular 18";
  inputtype = "checkbox";
  rollNumber: number = 12;
  isIndian: boolean = true;
  currentDate: Date = new Date();

  className:string="primary";

  isVisible:boolean=true;

  letters:string[]=['a','b','c','d'];

  isChannel1:boolean=true;
  isChannel1Running:boolean=true;

  constructor() {
    this.courseName = "angular";
  }

  showAlert(message:string){
    alert(message);
  }
  changeCourseName(){
    this.courseName='React.js';
  }
  toggle(){
    this.isVisible=!this.isVisible
  }
  changeChannel(){
    this.isChannel1=!this.isChannel1;
    this.isChannel1Running=!this.isChannel1Running;
  }

}
