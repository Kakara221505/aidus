import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  show: boolean = false; //toggle password
  fetching=false;
  wrongPassword: boolean = false;
  emailValidate: boolean=true
  message: any;
  successmessage: any;
  url: any;
  documentForm!:FormGroup
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  code: any;
  passwordValidate: boolean=true;
 
  constructor(private authService: AuthService, private formbuilder:FormBuilder, private router: Router,private activateRoute:ActivatedRoute,) { }

  ngOnInit(): void {
    this.code=this.activateRoute.snapshot.params['id']
    console.log("vivek",this.code)
    this.documentForm=this.formbuilder.group({
      email:["",[Validators.required, Validators.pattern(this.emailPattern)]],
     

    })
  }
  get email() {
    return this.documentForm.get('officialEmail');
 }   
validateEmail(form: NgForm){
  
//  let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

let inputs = form.value.email;
console.log("vivekdgdf1",inputs)
const result: boolean = expression.test(inputs);
if(!inputs==result){
this.emailValidate=false
console.log("vivek1",this.emailValidate)
}
else{
  this.emailValidate=true
  console.log("vivek",this.emailValidate)
}
}

validatePassword(form: NgForm){
  let inputs = form.value.password;
  if(inputs.length>15){
    this.passwordValidate=false
  }
}
  confirmPassword(form: NgForm) {
   let inputs = form.value;
   console.log("sads",inputs)
   if (inputs.confirm) {
    this.wrongPassword = ( inputs.password == inputs.confirm ) ? false : true;
   } else {
    this.wrongPassword = false;
   }

  }

  onSignup(form: NgForm) {
   
    this.fetching = true;
      this.authService.signup({'email': form.value.email, 'password': form.value.password,'referCode': form.value.referral}).subscribe((res:any) => {
        //autoLogin if signup succeful
        this.fetching = true; 
        localStorage.setItem('email', JSON.stringify(form.value.email));
        window.sessionStorage.setItem('user', JSON.stringify(res.data.token));
        this.successmessage=res.message
        console.log(this.successmessage)
        Swal.fire({
          // position: 'top-end',
          icon: 'success',
          title: 'Congratulations!',
          text:'You have signed up successfully. Please verify your email address to proceed further.',
          showConfirmButton: false,
          timer: 3000
        })
        this.router.navigate(['auth/verify'])
        .then(() => {
          window.location.reload();
         });

    },
    error => {
      this.fetching = false; 
      this.handleError(error);
     
    });

 

    setTimeout(()=> {
      this.fetching = false;
    }, 20000);
      
  
  }

  handleError(error:any) {
    this.message=error.error.message
    console.log("abcdsfds",this.message);
  }

  toLogin() {
    this.authService.signedUp('login');
  }

  onShow() {
    this.show = !this.show;
  }
  showPassword() {
    this.show = !this.show;
  }
}
