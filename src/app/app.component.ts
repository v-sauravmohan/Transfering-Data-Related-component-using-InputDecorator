import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  message = 'Please Parse My JSON';
  responseMessage: any;
  reqUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log(this.message);
    console.log('Fetching Response for Request');
    this.fetchRes().subscribe(
      data => {
        this.responseMessage = data;
      },
      err => {
        console.log(err);
      }
    );
    console.log('Json Rececived');
    console.log(this.responseMessage);
  }

  fetchRes(): Observable<any> {
     return this.http.get(this.reqUrl);
  }

}
