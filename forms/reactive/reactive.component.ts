import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {

  studentForm :FormGroup= new FormGroup({
    firstName:new FormControl("Anubhaw",[Validators.required,Validators.minLength(4)]),
    lastName:new FormControl(""),
    userName:new FormControl("",[Validators.email,Validators.required]),
    city:new FormControl(""),
    state:new FormControl(""),
    zipCode:new FormControl(""),
    isAcceptedTerms:new FormControl("")
  });

  formValue:any;
  onSave(){
    // debugger;
    this.formValue=this.studentForm.value;
  }

}
