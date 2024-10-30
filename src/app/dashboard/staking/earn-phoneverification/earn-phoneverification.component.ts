import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-earn-phoneverification',
  templateUrl: './earn-phoneverification.component.html',
  styleUrls: ['./earn-phoneverification.component.css']
})
export class EarnPhoneverificationComponent implements OnInit {
url:any
errormessage: any;
otp:any
addOtp!:FormGroup
  fetching= false;
  successmessage: any;
  message: any;
  message1:any= 'hii';
  party1: any;
  party: any;
  id: any;
  requestFor:any;
  requestFor1: any;
  public toggleButton: boolean = false;
  constructor(public api:DashboardService,private activateRoute:ActivatedRoute,private formbuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.party1 = window.localStorage.getItem('amount');
    if(this.party1){
      this.party = JSON.parse(this.party1)
      console.log("abc", this.party)
    };
    let coinType =
    {
      requestFor:'earn'
    }
  window.localStorage.setItem('coinType',JSON.stringify(coinType));

  this.requestFor1 = window.localStorage.getItem('coinType');
  console.log("abc", this.requestFor1)
  if(this.requestFor1){
    this.requestFor = JSON.parse(this.requestFor1)
    console.log("abc", this.requestFor)
  };

   this.id =this.activateRoute.snapshot.params['id']

    this.addOtp = this.formbuilder.group({     
     
      otp: [''],
      amount:this.party.amount,
      productId:this.id,
      requestFor:this.requestFor.requestFor
      
    
      
    }) 
  }
  
  AddOtp(){
    this.fetching = true; 
    this.toggleButton=true
    this.api.verifyOtp(this.url).subscribe((res: any) => {
      this.fetching = true; 
      
      Swal.fire({
        // position: 'top-end',
        icon: 'success',
        // title: 'Congratulations!',
        text:'OTP has been sent to your registered phone number!',
        showConfirmButton: false,
        timer: 3000
      })
      
      
  },
  error => {
    this.fetching = true; 
    this.handleError(error);
   
  }
  );
  setTimeout(()=> {
    this.fetching = false;
  }, 2000);
    this.fetching = false;
     
  }

  AddOtpVerify(){
    this.fetching = true; 
    this.api.verifyOtp1(this.addOtp.value).subscribe((res: any) => {
      this.fetching = true; 
       Swal.fire({
      // position: 'top-end',
      icon: 'success',
      title: 'Congratulations!',
      text:'Your Crypto has been staked successfully',
      showConfirmButton: false,
      timer: 3500
    })
    this.router.navigateByUrl('/dashboard/history')
      // this.successmessage=res.message
      // console.log(this.successmessage)
      
      
  },
  error => {
    this.fetching = true; 
    this.handleError(error);
    this.message=error.error.message
    console.log("ABC",this.message)
   

   
  }
  );
  setTimeout(()=> {
    this.fetching = false;
  }, 2000);
    this.fetching = false;
     
  }

  handleError(error:any) {
    this.message=error.error.message
    
  }
}
