import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-kyc',
  templateUrl: './dash-kyc.component.html',
  styleUrls: ['./dash-kyc.component.css']
})
export class DashKycComponent implements OnInit {

  isShowDiv = false;  
  constructor() { }

  ngOnInit(): void {
  }

 
     
  toggleDisplayDiv() {  
    this.isShowDiv = !this.isShowDiv;  
  }  

}
