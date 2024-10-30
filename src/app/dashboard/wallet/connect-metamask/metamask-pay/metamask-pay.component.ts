import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-metamask-pay',
  templateUrl: './metamask-pay.component.html',
  styleUrls: ['./metamask-pay.component.css']
})
export class MetamaskPayComponent implements OnInit {

  sucess=true
  amount: any;
  coin:any;

  constructor(public route:Router) { }

  ngOnInit(): void {
    this.amount= localStorage.getItem('depositData')
    this.coin= localStorage.getItem('depositData1')
  }

  pay(){
    this.sucess=true
  }

  done(){
    this.route.navigate(['/dashboard'])
  }

}
