import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient) {}
  getDepartmentHeads(){
   return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
}
