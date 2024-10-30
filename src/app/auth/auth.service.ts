import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import Swal from "sweetalert2";
// import { Http } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  message: any;
  // baseUrl='https://aidus-api.immodesta.com/user-module/user';
  baseUrl='https://api.aidus.io/user-module/user'
  token:any
  constructor( private http: HttpClient,public http1: HttpClientModule, private router: Router ) {
    this.token= JSON.parse(window.sessionStorage.getItem('user') || '{}');
  }

  googleqrCode() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Custom-Token': `${this.token}`,
      }),
    };
    
    return this.http.get(`${this.baseUrl}/get-google-auth-details`,httpOptions);
  }

  signup(credentials: {email: string, password: string, referCode: string}) {
    const Headers = new HttpHeaders().set('Content-type', 'application/json');

   return this.http.post(
    `${this.baseUrl}/signup`,
      credentials,
      {headers: Headers}
    )
  }

  resendEmail(credentials: {email: string},body:any) {
    const Headers = {
      headers: new HttpHeaders({
        'X-Custom-Token': `${this.token}`,
      }),
    };
    const email = encodeURIComponent(credentials.email);

   return this.http.post(
    `${this.baseUrl}/mail-verification`,body,
    Headers
    )
  }

  resendEmailUser(credentials: {email: string},body:any) {
    const Headers = {
      headers: new HttpHeaders({
        'X-Custom-Token': `${this.token}`,
      }),
    };
    const email = encodeURIComponent(credentials.email);

   return this.http.post(
    `${this.baseUrl}/resend-mail-verification?email=${email}`,body,
    Headers
    )
  }

  mailVerification(url:any,body:any) {
    const Headers = {
      headers: new HttpHeaders({
        'X-Custom-Token': `${this.token}`,
      }),
    };

   return this.http.post(
    `${this.baseUrl}/verified-mail-token/`+url,body,
    Headers
    )
  }

  

  login(credentials: {email: string, password: string}) {
    const Headers = new HttpHeaders().set('accept', '*/*');

    const email = encodeURIComponent(credentials.email);

   return this.http.post(
      `${this.baseUrl}/login?email=${email}&password=${credentials.password}`,
      Headers
    )
  }

  forgotPw(email: string) {
    const encodedEmail = encodeURIComponent(email);
    console.log("sending otp to email");
    //send otp to email api
   return this.http.post(
    `${this.baseUrl}/forgot-password?email_or_mobile=`+ encodedEmail,
      Headers
    )
  }

  resetPw(password: string,token:string) {
    const Headers = new HttpHeaders().set('accept', '*/*');

    // const email = encodeURIComponent(credentials.email);

   return this.http.post(
      `${this.baseUrl}/forgot-change-password?password=${password}&token=${token}`,
      Headers
    )

    
  }

  //   ).subscribe(
  //     res => {
  //       Swal.fire({
  //       position: 'top-end',
  //       icon: 'success',
  //       title: 'Congratulations!',
  //       text:'Password reset successfully',
  //       showConfirmButton: false,
  //       timer: 8000
  //     })
  //       this.router.navigate(['auth/login']);
  //     },
  //     error=> {
  //       this.handleError(error);
  //       this.router.navigate(['auth/login']);
  //     }
  //   );
  // }

 

  signedUp(value: string) {
    this.router.navigate(['auth', value]);
  }

  listDocument() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Custom-Token': `${this.token}`,
      }),
    };
    return this.http.get(`${this.baseUrl}/get-all-documents`,httpOptions)
   
  }

  getUserInfo() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Custom-Token': `${this.token}`,
      }),
    };
    return this.http.get(`${this.baseUrl}/get-user-details`,httpOptions)
   
  }

  postDocument(body: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Custom-Token': `${this.token}`,
      }),
    };
    return this.http.post(`${this.baseUrl}/add-personal-documents`, body, httpOptions);
  }

  postPersonalDocument(body: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Custom-Token': `${this.token}`,
      }),
    };
    return this.http.post(`${this.baseUrl}/add-personal-info`, body, httpOptions);
  }


  listPhones() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Custom-Token': `${this.token}`,
      }),
    };
    return this.http.get(`${this.baseUrl}/get-all-country-codes`,httpOptions)
   
  }

  

  verifyOtpPhone(type:any,body:any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Custom-Token': `${this.token}`,
      }),
    };
    
    return this.http.post(`${this.baseUrl}/send-otp`+'/'+type,body, httpOptions);
  }

  factorSubmit(body:any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Custom-Token': `${this.token}`,
      }),
    };
    
    return this.http.post(`${this.baseUrl}/verify-enable-2fa`,body, httpOptions);
  }


  otpVerification(body: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Custom-Token': `${this.token}`,
      }),
    };
    return this.http.post(`${this.baseUrl}/verify-user-mobile-otp`, body, httpOptions);
  }


  handleError(error:any) {
    this.message=error.error.message
    // console.log("abc",this.message);
  }
}
