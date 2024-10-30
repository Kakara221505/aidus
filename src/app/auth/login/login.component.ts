import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  show: boolean = false;
  fetching: boolean = false;
  message: any;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(form: NgForm) {
    this.fetching = true;
    this.authService.login({email: form.value.email, password: form.value.password}).subscribe((body:any) => {
      this.fetching = true;
      window.sessionStorage.setItem('user', JSON.stringify(body.data.token));
      localStorage.setItem('email', JSON.stringify(form.value.email));
      // console.log("abc",body.error.message)
      if(window.sessionStorage.getItem('user')) {
        // this.router.navigate(['dashboard']);

        this.router.navigate(['dashboard'])
         .then(() => {
         window.location.reload();
        });

      }
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
    this.fetching = false;
    this.message=error.error.message
    console.log("abc",this.message);
  }
 

  forgotPassword() {
    this.authService.signedUp('forgot');
  }

  toSignup() {
    this.authService.signedUp('signup');
  }

  showPassword() {
    this.show = !this.show;
  }

}
