import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-identify-verification-step3',
  templateUrl: './identify-verification-step3.component.html',
  styleUrls: ['./identify-verification-step3.component.css']
})
export class IdentifyVerificationStep3Component implements OnInit {
  data: any;

  constructor(public api:AuthService) { }

  ngOnInit(): void {
    this.getQr()
  }

  getQr(){
   
    this.api.googleqrCode().subscribe((res: any) => {
      this.data=res.data
      console.log("viv",this.data)
  } );

  }


}
