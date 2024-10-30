import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-withdraw-summary',
  templateUrl: './withdraw-summary.component.html',
  styleUrls: ['./withdraw-summary.component.css']
})
export class WithdrawSummaryComponent implements OnInit {
  party1: any;
  party: any;
  
  chkAcceptTerms:any;
  coinList: any;
  url: any;

  constructor(public api:DashboardService,) { }

  ngOnInit(): void {

    this.party1 = window.localStorage.getItem('amount');
    if(this.party1){
      this.party = JSON.parse(this.party1)
      console.log("abc", this.party)
    };
    this.withDrawSummary();
  }

  withDrawSummary(){
    // this.activateRoute.snapshot.params['id']
    this.party1 = window.localStorage.getItem('amount');
    if(this.party1){
      this.party = JSON.parse(this.party1)
      console.log("abc", this.party)
    
    this.api.getWithdraw(this.party.wallet_type,this.party.address).subscribe((res:any)=>{
     
        
        this.coinList = res.data;

        console.log("vivek", this.party)
       
      
  
  
       
    
    })
  };
    
  }

}
