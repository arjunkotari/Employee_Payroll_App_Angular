import { Component, OnInit } from '@angular/core';
import{GetApiService} from '../get-api.service';
//import {MatIconModule} from '@angular/material/icon'

export interface Emp{
  name: String;
  gender  : String;
  department : String;
  salary : String;
  startDate :String;
}

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  name='';
  gender = '';
  department = '';
  salary = '';
  startDate = '';
  employeeDetails:Emp[] =[ ];
  constructor(private api:GetApiService) { }

  ngOnInit(){
    this.EmployeeDetails();
  }

  EmployeeDetails(){
    this.api.apiCall().subscribe(data=>{
    this.employeeDetails=data.data;
    })
  }
}
