import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  user_id: any;

  constructor() { }

  ngOnInit(): void {
    this.user_id= window.sessionStorage.getItem('user')
    console.log("vivek",this.user_id)
  }

}
