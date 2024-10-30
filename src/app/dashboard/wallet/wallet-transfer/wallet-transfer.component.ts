import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClipboardService } from 'ngx-clipboard';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-wallet-transfer',
  templateUrl: './wallet-transfer.component.html',
  styleUrls: ['./wallet-transfer.component.css']
})
export class WalletTransferComponent implements OnInit {
  fetching: boolean = false;
  data: any;
  coin:any
  amount:any
  message=false
  constructor(private router: Router, private api:DashboardService,private clipboardApi: ClipboardService) { }

  ngOnInit(): void {
   this.amount= localStorage.getItem('depositData')
   this.coin= localStorage.getItem('depositData1')
    let body={

    }
    this.api.postData(`/check/generate-wallet-eth/${this.coin}`, body).subscribe((res: any) => {
          this.data=res
          console.log("viv",this.data)
      } );

  }

  copyText() {
    this.message=true
     this.clipboardApi.copyFromContent(this.data.publicKey)
   }



  onPaymentDone() {
    this.fetching = true;
    setTimeout(() => {
      this.fetching = false;
      this.router.navigate(['/dashboard', 'wallet']);
    }, 2000)
  }

  onCancel() {
    this.router.navigate(['/dashboard','wallet']);
  }

}
