import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  url:any
  errormessage: any;
    fetching= false;
    successmessage: any;
    message: any;
  messageemail: any;
  data: any;
  otpForm!:FormGroup

  value:any
  constructor(public api:AuthService,private activateRoute:ActivatedRoute,private formbuilder:FormBuilder,private router:Router,private modalService:NgbModule) { }

  ngOnInit(): void {
    this.otpForm=this.formbuilder.group({
      otp:[''],

    })
  }
  onOtpChange(val:any){
this.value=val
console.log("vk",this.value)
  }
  
  postOtp() {
    this.fetching = true;
    console.log("vivek",this.value)
    this.api.otpVerification({otp:this.value}).subscribe((res: any) => {
      this.fetching = true;
      this.data=res
   
      console.log("hjf",this.data)
     
      this.router.navigate(['auth/upload-identification'])

   }, 
  error => {
    this.handleError(error);
    this.router.navigate(['auth/otp'])
    
  } );

  setTimeout(()=> {
    this.fetching = false;
  }, 2000);
 

 
  }

  handleError(error:any) {
    this.fetching = true;
    this.message=error.error.status
    console.log("abc",this.message);
  }


}
