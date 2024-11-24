import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forcontrol',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forcontrol.component.html',
  styleUrl: './forcontrol.component.css'
})
export class ForcontrolComponent {

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

}
