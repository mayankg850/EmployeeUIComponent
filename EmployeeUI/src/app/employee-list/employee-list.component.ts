import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './../app.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  dataSource: any[] = [];
  displayedColumns = ['firstName', 'lastName', 'gender', 'dateOfBirth', 'department'];
  constructor(private appService: AppService, private router: Router) { }

  ngOnInit() {
    this.appService.getEmployee()
      .subscribe((res: any[]) => {
        this.dataSource = res;
      }, error => {
        console.log('error');
      })
  }

  addEmployee() {
    this.router.navigate(['addEmployee']);
  }

}
