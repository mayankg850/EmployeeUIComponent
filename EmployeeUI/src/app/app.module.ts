import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { MatTableModule, MatNativeDateModule } from '@angular/material'; 
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';


import { AppComponent } from './app.component';

import { MatInputModule ,MatButtonModule} from '@angular/material';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { EmployeeListComponent } from './employee-list/employee-list.component'; 

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    EmployeeListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatTableModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
