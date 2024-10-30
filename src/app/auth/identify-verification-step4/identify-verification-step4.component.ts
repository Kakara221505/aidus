import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from 'src/app/dashboard/dashboard.service';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-identify-verification-step4',
  templateUrl: './identify-verification-step4.component.html',
  styleUrls: ['./identify-verification-step4.component.css']
})
export class IdentifyVerificationStep4Component implements OnInit {
  userName = '';
  url:any
  public toggleButton: boolean = false;
  public toggleButton1: boolean = false;
  errormessage: any;
    fetching= false;
    successmessage: any;
    message: any;
  messageemail: any;
  type:any='sms';
  type1:any='email';
  addBroker!:FormGroup
  data: any="false";
  constructor(public api:AuthService,private activateRoute:ActivatedRoute,private formbuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {

    this.addBroker = this.formbuilder.group({     
     
      smsOtp: [''],
      emailOtp:[''],
      googleAuthenticatorCode:[''],
    
      
    }) 
  }


  AddOtp(){
    this.fetching = true; 
    this.toggleButton = true
    this.api.verifyOtpPhone(this.type,this.url).subscribe((res: any) => {
      this.fetching = true; 
      this.data="true"
      console.log("vivek",this.data)
   
      Swal.fire({
       
        icon: 'success',
        title: 'Congratulations!',
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

  resendPhoneOtp(){
    this.fetching = true; 
    this.api.verifyOtpPhone(this.type,this.url).subscribe((res: any) => {
      this.fetching = true; 
   
      Swal.fire({
       
        icon: 'success',
        text:'OTP has been resent to your registered phone number!',
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

  AddOtp1(){
    this.fetching = true; 
    this.toggleButton1 = true
    this.api.verifyOtpPhone(this.type1,this.url).subscribe((res: any) => {
      this.fetching = true; 
      // this.successmessage=res.message
      // console.log(this.successmessage)
      Swal.fire({
        // position: 'top-end',
        icon: 'success',
        title: 'Congratulations!',
        text:'OTP has been sent to your registered email address!',
        showConfirmButton: false,
        timer: 3000
      })
      this.fetching = false; 
      
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

  resendEmailOtp(){
    this.fetching = true; 
    this.api.verifyOtpPhone(this.type1,this.url).subscribe((res: any) => {
      this.fetching = true; 
      
      Swal.fire({
        // position: 'top-end',
        icon: 'success',
        text:'OTP has been resent to your registered email address!',
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

  
  handleError(error:any) {
    this.messageemail=error.error.message
    
  }

  submit(){
    this.fetching = true; 
    this.api.factorSubmit(this.addBroker.value).subscribe((res: any) => {
      this.fetching = true; 
    
      this.router.navigateByUrl('/auth/identification-verification-step-5')
      
      
  },
  error => {
    this.fetching = true; 
    this.router.navigateByUrl('/auth/identification-verification-step-4')
   
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
}
