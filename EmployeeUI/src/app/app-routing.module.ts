import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

const routes: Routes = [{
  path: '', component: EmployeeListComponent
},
{
  path: 'employee', component: EmployeeListComponent
},
{
  path: 'addEmployee', component: RegistrationFormComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
