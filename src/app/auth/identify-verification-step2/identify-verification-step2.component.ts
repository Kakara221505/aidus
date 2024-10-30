import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-identify-verification-step2',
  templateUrl: './identify-verification-step2.component.html',
  styleUrls: ['./identify-verification-step2.component.css']
})
export class IdentifyVerificationStep2Component implements OnInit {
  data: any;

  constructor(public api:AuthService) { }

  ngOnInit(): void {
    this.getQr();
  }

  getQr(){
   
    this.api.googleqrCode().subscribe((res: any) => {
      this.data=res.data
      console.log("viv",this.data)
  } );

  }

}
