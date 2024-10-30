import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
  coin='eth'
  amount:any
  constructor(private router: Router) { }
  ngOnInit(): void {

  }

  depositBy() {
    localStorage.setItem('depositData', this.amount)
    localStorage.setItem('depositData1', this.coin)
    this.router.navigate(['/dashboard/wallet/transfer']);
  }

  onChange(val:any) {
      this.coin=val.target.value      
}

}
