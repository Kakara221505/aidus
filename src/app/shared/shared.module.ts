import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashNavComponent } from './dash-nav/dash-nav.component';
import { RouterModule } from '@angular/router';
import { FaqComponent } from './faq/faq.component';
import { ErrorComponent } from './error/error.component';
import { AuthNavComponent } from './auth-nav/auth-nav.component';
import { DashPopUpComponent } from './dash-pop-up/dash-pop-up.component';
import { DashKycComponent } from './dash-kyc/dash-kyc.component';
import { DashNavAmbessdorComponent } from './dash-nav-ambessdor/dash-nav-ambessdor.component';



@NgModule({
  declarations: [
    NavComponent,
    ErrorComponent,
    FooterComponent,
    DashNavComponent,
    FaqComponent,
    AuthNavComponent,
    DashPopUpComponent,
    DashKycComponent,
    DashNavAmbessdorComponent
  ],
  imports: [
    FontAwesomeModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    NavComponent,
    FooterComponent,
    DashNavComponent,
    FaqComponent,
    ErrorComponent,
    AuthNavComponent,
    DashPopUpComponent,
    DashKycComponent,
    DashNavAmbessdorComponent

  ],

})
export class SharedModule { }
