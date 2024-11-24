import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { DepartmentService } from '../../../service/department.service';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent implements OnInit {

  userList: any[] = [];
  customerList:any[]=[];
  department:any[]=[];
  // http1=inject(HttpClient);  // this is new way injecting service's object --- from Angular 16
  constructor(private http: HttpClient, private depart:DepartmentService) {
    //this way creating object of service is called as Dependency Injection(DI)   
  }
  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser() {
    // debugger;
    // this API is giving us array of object
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res: any) => {
      // debugger;
      this.userList = res;
    })
  }

  getAllCustomer(){
    debugger;
    // this API is giving us object
    this.http.get("http://projectapi.gerasim.in/api/RealEstate/GetAllCustomers").subscribe((res:any)=>{
      debugger;
      this.customerList=res.data;
    }, error=>{
      console.log('Error in api calling');
      
    }
  )
  }

  getDepartment(){
    this.depart.getDepartmentHeads().subscribe((res:any)=>{
      this.department=res;
    })
  }
}
