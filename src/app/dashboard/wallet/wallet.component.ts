import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  depositData: any;

  constructor(public api:DashboardService) { }

  ngOnInit(): void {
    this.getDepositTransactionlist()
  }

  getDepositTransactionlist(){
    this.api.getDataDashboard().subscribe((res:any)=>{
      if(res){
        this.depositData=res.data

        console.log("abc",this.depositData)
      }
    })
  }

}
