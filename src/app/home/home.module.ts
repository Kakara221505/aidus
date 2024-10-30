import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features/features.component';
import { LandingComponent } from './landing/landing.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProductsComponent } from './products/products.component';
import { AssetsComponent } from './assets/assets.component';
import { ReturnsComponent } from './returns/returns.component';
import { HowToComponent } from './how-to/how-to.component';
import { AboutComponent } from './about/about.component';
import { TaglineComponent } from './tagline/tagline.component';
import { SharedModule } from '../shared/shared.module';
import { TokenComponent } from './token/token.component';
import { AboutUsCompanyComponent } from './about-us-company/about-us-company.component';
import { AboutUsAmbassadorComponent } from './about-us-ambassador/about-us-ambassador.component';
import { ProductEarnmaxComponent } from './product-earnmax/product-earnmax.component';
import { ProductEarnsafeComponent } from './product-earnsafe/product-earnsafe.component';
import { ProductEarnComponent } from './product-earn/product-earn.component';
import { TransparencyAuditreportComponent } from './transparency-auditreport/transparency-auditreport.component';
import { TransparencySecurityComponent } from './transparency-security/transparency-security.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'token',
    component: TokenComponent,
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
  },
  {
    path: 'terms-condition',
    component: TermsConditionComponent,
  },
  {
    path: 'about-us-company',
    component: AboutUsCompanyComponent,
  },
  {
    path: 'about-us-ambassador',
    component: AboutUsAmbassadorComponent,
  },
  {
    path: 'product-earn',
    component: ProductEarnComponent,
  },
  {
    path: 'product-earnmax',
    component: ProductEarnmaxComponent,
  },
  {
    path: 'product-earnsafe',
    component: ProductEarnsafeComponent,
  },
  {
    path: 'transparency-auditreport',
    component: TransparencyAuditreportComponent,
  },
  {
    path: 'transparency-security',
    component: TransparencySecurityComponent,
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    LandingComponent,
    FeaturesComponent,
    ProductsComponent,
    AssetsComponent,
    ReturnsComponent,
    HowToComponent,
    AboutComponent,
    TaglineComponent,
    TokenComponent,
    AboutUsCompanyComponent,
    AboutUsAmbassadorComponent,
    ProductEarnmaxComponent,
    ProductEarnsafeComponent,
    ProductEarnComponent,
    TransparencyAuditreportComponent,
    TransparencySecurityComponent,
    PrivacyPolicyComponent,
    TermsConditionComponent,
    
    
  ],
  imports: [RouterModule.forChild(routes), CommonModule, SharedModule,NgbModule,FormsModule,ReactiveFormsModule],
  providers: [],
})
export class HomeModule {}
