import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { AppService } from './../app.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  registrationForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    gender: new FormControl(''),
    dateOfBirth: new FormControl(''),
    department: new FormControl(''),
  })
  genderInput = [
    { value: 'male', viewValue: 'Male' },
    { value: 'female', viewValue: 'Female' }
  ];

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    public appService: AppService
  ) { }

  ngOnInit() {
  }

  submit() {
    console.log(this.registrationForm.value);
    const details = this.registrationForm.value;
    const registrationdetails = {
      firstName: details.firstName,
      lastName: details.lastName,
      gender: details.gender,
      dateOfBirth: details.dateOfBirth,
      department: details.department
    };

    this.appService.doPOST(registrationdetails).subscribe(val => val)
    // this.http.post('http://192.168.33.45:7070/addEmployee', registrationdetails, { responseType: 'text' }).subscribe(value => {
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000,
      verticalPosition: 'top'
    });
  }

  goToEmployeeList() {
    this.router.navigate(['employee']);
  }
}
