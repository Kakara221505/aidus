import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import Swal from 'sweetalert2';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-address-verification',
  templateUrl: './address-verification.component.html',
  styleUrls: ['./address-verification.component.css']
})
export class AddressVerificationComponent implements OnInit {
  url:any
  errormessage: any;
    fetching= false;
    successmessage: any;
    public toggleButton: boolean = false;
    public toggleButton1: boolean = false;
    message: any;
    message1:any= 'hii';
    party1: any;
    type:any='sms'
    addBroker!:FormGroup
    type1:any='email'
    party: any;
    id: any;
    requestFor:any;
  messageemail: any;
  data: any;
  whitelist: any;
  address: any;
  data1: any;
  dataauth: any;


  constructor(public api:DashboardService,private activateRoute:ActivatedRoute, public api1:AuthService, private formbuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.userData()
    // this.getQr();
   
   
    this.party1 = window.localStorage.getItem('whiteListId');
    
    this.party = JSON.parse(this.party1)
    this.whitelist =this.party.id.id
    this.address =this.party.address
    console.log("abc", this.address)

    this.addBroker = this.formbuilder.group({     
     
      smsOtp: [''],
      emailOtp:[''],
      googleAuthenticatorCode:[''],
      id:this.party.id.id
    
      
    }) 



   
    
  
  //   this.api.postData(`check/generate-wallet-eth/${this.coin}`, body).subscribe((res: any) => {
  //     this.data=res
  //     console.log("viv",this.data)
  // } );
  }
  getQr(){
   
    this.api.googleqrCode().subscribe((res: any) => {
      this.data=res
      console.log("viv",this.data)
  } );

  }
  


  AddOtp(){
    this.fetching = true; 
    this.toggleButton = true
    this.api.verifyOtpPhoneWhitelist(this.party.id.id,this.type,this.url).subscribe((res: any) => {
      this.fetching = true; 
      // this.successmessage=res.message
      // console.log(this.successmessage)
      Swal.fire({
        // position: 'top-end',
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

  userData(){
   
   
    this.api1.getUserInfo().subscribe((res:any)=>{
     
        this.dataauth=res.data
        this.data1=res.data.google2FAVerified
        console.log("vivek",this.data1)
     
    })
  }
   

  AddOtp1(){
    this.fetching = true; 
    this.toggleButton1 = true
    this.api.verifyOtpEmailWhitelist(this.party.id.id,this.type1,this.url).subscribe((res: any) => {
      this.fetching = true; 
      // this.successmessage=res.message
      // console.log(this.successmessage)
      Swal.fire({
        // position: 'top-end',
        icon: 'success',
        title: 'Congratulations!',
        text:'OTP has to been sent to your registered email address!',
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

  submit(){
    this.fetching = true; 
    this.api.whiteList(this.party.address,this.addBroker.value).subscribe((res: any) => {
      this.fetching = true; 
      // this.successmessage=res.message
      // console.log(this.successmessage)
      Swal.fire({
        // position: 'top-end',
        icon: 'success',
        title: 'Congratulations!',
        text:'Address Added Successfully',
        showConfirmButton: false,
        timer: 4000
      })
      this.router.navigateByUrl('/dashboard/withdraw')
      
      
  },
  error => {
    this.fetching = true; 
    // Swal.fire({
    //   // position: 'top-end',
    //   icon: 'error',
    //   title: 'Otp Not Matched',
    //   // text:this.message1,
    //   showConfirmButton: false,
    //   timer: 2000
    // })
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
    this.messageemail=error.error.message
    
  }
  

}

