import { Component } from '@angular/core';
import{GetApiService} from './get-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello';
  salary='';
  
  empDetails=[];
  constructor(private api:GetApiService){

  }
  ngOnInit(){
    this.EmployeeDetails();
  }

  EmployeeDetails(){
    this.api.apiCall().subscribe(data=>{
    console.log("get api data ", data.data);
    //this.title = data.data[0].name;      
    })
  }
}
