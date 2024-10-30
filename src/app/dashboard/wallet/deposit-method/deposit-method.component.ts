import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-deposit-method',
  templateUrl: './deposit-method.component.html',
  styleUrls: ['./deposit-method.component.css']
})
export class DepositMethodComponent implements OnInit {
  constructor(private router: Router, public api:DashboardService) { 
   
  }

  ngOnInit(): void {
  }

  viaWallet() {
      
      this.router.navigate(['/dashboard/wallet/method']);
  }

  viaMetamask() {
    this.router.navigate(['/dashboard/wallet/meeta-mask']);
  }

}
