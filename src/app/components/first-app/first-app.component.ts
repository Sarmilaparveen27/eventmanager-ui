import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-first-app',
  templateUrl: './first-app.component.html',
  styleUrls: ['./first-app.component.css']
})
export class FirstAppComponent implements OnInit {
  event:any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getEvents();
  
   }
   getEvents(){
    let url='http://localhost:8080/event/details/list';
     this.httpClient.get(url).subscribe(res=>{
      console.log("response",res);
      this.event=res;
    })
  
   }

}