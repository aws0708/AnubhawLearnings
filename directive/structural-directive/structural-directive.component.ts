import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {

  isDiv1Visible:boolean=true;
  isDiv2Visible:boolean=true;
  num1:string='';
  num2:string='';
  isCheckBoxActive:boolean=false;
  countrySelected:string='';
  cityArray:string[]=['Noida','Delhi','Mussoorie','Dehradun','Gurgaon'];
  studentList:any[]=[
    {studId:12,name:'AAA',city:'Noida',isActive:false},
    {studId:22,name:'BBB',city:'Gurgaon',isActive:true},
    {studId:32,name:'ACC',city:'Delhi',isActive:false},
    {studId:35,name:'CCCC',city:'Chandigarh',isActive:true},
    {studId:77,name:'KKK',city:'Mussoorie',isActive:false},
    {studId:62,name:'FFF',city:'Dehradun',isActive:true},
    {studId:66,name:'NNN',city:'Rishikesh',isActive:true}
  ]

  showDiv1(){
    this.isDiv1Visible=true;
  }
  hideDiv1(){
    this.isDiv1Visible=false;
  }

  toggleDiv2(){
    this.isDiv2Visible=!this.isDiv2Visible;
  }

}
