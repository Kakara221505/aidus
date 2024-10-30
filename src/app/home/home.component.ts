import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user_id:any
  constructor() { }

  ngOnInit(): void {
    this.user_id= window.sessionStorage.getItem('user')
    console.log("vivek",this.user_id)
  }

}
