import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Rates = {source: '', updateTime: ''};
  item:any
  depositData: any;
  depositDataAmbessdor: any;
  constructor(public api:DashboardService) { }

  ngOnInit(): void {
    this.getDepositTransactionlist();
  }

  getDepositTransactionlist(){
    this.api.getDataDashboard().subscribe((res:any)=>{
     
        this.depositData=res.data
        this.depositDataAmbessdor=res.data.ambassador
        localStorage.setItem('ambessdor', JSON.stringify(this.depositDataAmbessdor));
        console.log("vivekdsfsd",this.depositDataAmbessdor)
     
    })
  }



}
