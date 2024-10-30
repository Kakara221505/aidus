import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgot-pw',
  templateUrl: './forgot-pw.component.html',
  styleUrls: ['./forgot-pw.component.css']
})
export class ForgotPwComponent implements OnInit {
  fetching: boolean = false;
  message: any;
  successmessage: any;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {

  }

  sendOtp(form: NgForm) {
    this.fetching = true;
    this.authService.forgotPw(form.value.email).subscribe((body:any) => {
      this.fetching = true;
      // localStorage.setItem('user', JSON.stringify(body.data.token));
      // console.log("abc",body.error.message)
      this.successmessage=body.message
      console.log(this.successmessage)
    },
    error => {
      this.handleError(error);
      this.router.navigate(['auth/login'])
    });
    setTimeout(()=> {
      this.fetching = false;
    }, 2000);
  }
  handleError(error:any) {
    this.fetching = true;
    this.message=error.error.message
    console.log("abc",this.message);
  }
 


}
