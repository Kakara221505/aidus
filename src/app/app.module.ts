import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';  
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgOtpInputModule } from 'ng-otp-input';
import { NgApexchartsModule } from 'ng-apexcharts';
// import { RoundOfPipe } from './round-of.pipe';
import { Select2Module } from 'ng-select2-component';




 

@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    NgOtpInputModule,
    NgApexchartsModule,
    Select2Module
   
    
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }] ,
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
