import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{EmployeePayrollFromComponent} from '../app/employee-payroll-from/employee-payroll-from.component';
import {EmployeeDetailsComponent} from '../app/employee-details/employee-details.component';
const routes: Routes = [
  
  {
    path: 'employeeDetails',
    component: EmployeeDetailsComponent
  },
  {
    path: '',
    redirectTo: '/employeeDetails', pathMatch: 'full'
  },
  
    { path: 'employee-payroll',
     component: EmployeePayrollFromComponent },  
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
 }
