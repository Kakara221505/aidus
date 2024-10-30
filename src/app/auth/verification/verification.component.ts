import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
  verify=true;
  expire=false;
  varified=false;
  identify=false
  url: any;
  message: any;
  fetching=false;
  email:any;
  email1: any;
  constructor(private router: Router,private authService: AuthService) { }

  ngOnInit(): void {
    
    this.email=localStorage.getItem('email');
    // console.log("vivek",this.email)
    this.onSignup();
   
   
  }
  onSignup(){
   
  this.authService.resendEmail(this.email1,this.url).subscribe((res:any) => {
   
    //autoLogin if signup succeful
    // this.fetching = true; 
    // this.successmessage=res.message
    // console.log(this.successmessage)
    Swal.fire({
      // position: 'top-end',
      icon: 'success',
      title: 'Congratulations!',
      text:'Verification link has been sent to your registered email address',
      showConfirmButton: false,
      timer: 8000
    })
    

},
error => {
  this.fetching = false; 
  this.handleError(error);
 
});
this.fetching = true;
  }

  handleError(error:any) {
    this.message=error.error.message
    console.log("abc",this.message);
  }


  senEmail(){
    // this.verify=false;
    // this.expire=true;
    // this.varified=false;
    // this.identify=false
    this.email=localStorage.getItem('email');
    // this.email1=JSON.stringify(this.email)
   this.email1= this.email.replace(/['"]+/g, '')
    console.log("vivek",this.email1)
    this.authService.resendEmailUser({'email':this.email1},this.url).subscribe((res:any) => {
      Swal.fire({
        // position: 'top-end',
        icon: 'success',
        title: 'Congratulations!',
        text:'Verification link has been sent to your registered email address',
        showConfirmButton: false,
        timer: 8000
      })
      
  
  },
  error => {
    this.fetching = false; 
    this.handleError(error);
   
  });
  this.fetching = true;
  
    
  }
  route(){
    localStorage.removeItem('email')
    this.router.navigate(['dashboard'])
 
    .then(() => {
    window.location.reload();
   });
  }
  senEmailExpire(){
    this.verify=false;
    this.expire=false;
    this.varified=true;
    this.identify=false
  }
  emailVerified(){
    this.verify=false;
    this.expire=false;
    this.varified=false;
    this.identify=true
  }

}
