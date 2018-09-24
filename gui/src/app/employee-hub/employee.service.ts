import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient ) { }

  public allEmployees(){
    console.log("2");
    return this.http.get("/api/employees");
  }

  public addEmployee(param){
    return this.http.post("/api/employee",param);
  }
    
  
}
