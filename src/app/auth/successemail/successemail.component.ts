import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-successemail',
  templateUrl: './successemail.component.html',
  styleUrls: ['./successemail.component.css']
})
export class SuccessemailComponent implements OnInit {
  // signUuLink="http://localhost:4200/#/auth/success-email";
  // signUuLink="http://localhost:4200/#/auth/success-email";
  email: any;
  email1: any;
  token: any;
  message: any;
  fetching=false;
  url: any;
  verify=false;
  identify=false;
  expire=false
  constructor(private activateRoute:ActivatedRoute,private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
    this.email=this.activateRoute.snapshot.params['email']
    this.token=this.activateRoute.snapshot.params['token']
    // console.log("vivek",this.token,this.email)
    this.authService.mailVerification(this.token,this.url).subscribe((res:any) => {
    
        this.verify=true
     
      // Swal.fire({
      //   position: 'top-end',
      //   icon: 'success',
      //   title: 'Congratulations!',
      //   text:'Verification link has been sent to your registered email address',
      //   showConfirmButton: false,
      //   timer: 8000
      // })
    
  
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
    this.expire=true
  }

  sendNext(){
    this.verify=false
    this.expire=false
    if(this.token){
    this.identify=true
    }
    else{
      this.router.navigate(['auth/login']);
    }
  }

  sendNext1(){
    this.verify=false
    this.expire=false
    
    this.identify=true
   
  }

  route(){
    localStorage.removeItem('email')
    this.router.navigate(['auth/login'])
 
    .then(() => {
    window.location.reload();
   });
  }
 

}
