import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, NgSelectOption, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { VerificationComponent } from './verification/verification.component';
import { ForgotPwComponent } from './forgot-pw/forgot-pw.component';
import { ResetPwComponent } from './forgot-pw/reset-pw/reset-pw.component';
import { LoadingComponent } from './loading/loading.component';
import { AuthGuard } from './auth.guard';
import { ResendEmailComponent } from './resend-email/resend-email.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { IdentityVerificationComponent } from './identity-verification/identity-verification.component';
import { OtpComponent } from './otp/otp.component';
import { UploadIdendificationComponent } from './upload-idendification/upload-idendification.component';
import { AppModule } from '../app.module';
import { IdentifyVerificationStep2Component } from './identify-verification-step2/identify-verification-step2.component';
import { IdentifyVerificationStep3Component } from './identify-verification-step3/identify-verification-step3.component';
import { IdentifyVerificationStep5Component } from './identify-verification-step5/identify-verification-step5.component';
import { IdentifyVerificationStep4Component } from './identify-verification-step4/identify-verification-step4.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { SuccessemailComponent } from './successemail/successemail.component';
import { Select2Module } from 'ng-select2-component';








const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup/:id', component: SignupComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'verify', component: VerificationComponent},
  { path: 'forgot', component: ForgotPwComponent },
  { path: 'reset/:id', component: ResetPwComponent },
  { path: 'resend-email', component: ResendEmailComponent },
  { path: 'personal-information', component: PersonalInfoComponent },
  { path: 'otp', component: OtpComponent },
  { path: 'success-email/:token', component: SuccessemailComponent },
 
  { path: 'upload-identification', component: UploadIdendificationComponent },
  { path: 'identification-verification', component: IdentityVerificationComponent },
  { path: 'identification-verification-step-2', component: IdentifyVerificationStep2Component },
  { path: 'identification-verification-step-3', component: IdentifyVerificationStep3Component },
  { path: 'identification-verification-step-4', component: IdentifyVerificationStep4Component },
  { path: 'identification-verification-step-5', component: IdentifyVerificationStep5Component },
  { path: '', component: LoginComponent },
];



@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignupComponent,
    VerificationComponent,
    ForgotPwComponent,
    ResetPwComponent,
    LoadingComponent,
    ResendEmailComponent,
    PersonalInfoComponent,
    IdentityVerificationComponent,
    OtpComponent,
    UploadIdendificationComponent,
    IdentifyVerificationStep2Component,
    IdentifyVerificationStep3Component,
    IdentifyVerificationStep5Component,
    IdentifyVerificationStep4Component,
    SuccessemailComponent,
  

   
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgOtpInputModule,
    Select2Module
    
    

  ]
})
export class AuthModule { }
