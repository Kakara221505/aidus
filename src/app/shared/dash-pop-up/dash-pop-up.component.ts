import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-pop-up',
  templateUrl: './dash-pop-up.component.html',
  styleUrls: ['./dash-pop-up.component.css']
})
export class DashPopUpComponent implements OnInit {
  isShowDiv = false;  
  constructor() { }

  ngOnInit(): void {
  }

 
     
  toggleDisplayDiv() {  
    this.isShowDiv = !this.isShowDiv;  
  }  

}
