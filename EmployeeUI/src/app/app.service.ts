import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private DO_POST = "http://localhost:7070/addEmployee";
  private FETCH_DATA = "http://localhost:7070/getAllEmployee";

  constructor(private httpClient: HttpClient) { }

  doPOST(data) {
    console.log("POST");
    return this.httpClient.post(this.DO_POST, data);
  }

  getEmployee() {
    return this.httpClient.get(this.FETCH_DATA);

  }
}