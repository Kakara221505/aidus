import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meta-mask',
  templateUrl: './meta-mask.component.html',
  styleUrls: ['./meta-mask.component.css']
})
export class MetaMaskComponent implements OnInit {

  coin='eth'
  amount:any
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  depositBy() {
    localStorage.setItem('depositData', this.amount)
    localStorage.setItem('depositData1', this.coin)
    this.router.navigate(['/dashboard/wallet/connect']);
  }

  onChange(val:any) {
      this.coin=val.target.value      
}

}
