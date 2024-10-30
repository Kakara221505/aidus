
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { WalletComponent } from './wallet/wallet.component';
import { StakingComponent } from './staking/staking.component';
import { HistoryComponent } from './history/history.component';
import { ReferralComponent } from './referral/referral.component';
import { MainComponent } from './main/main.component';
import { SharedModule } from "../shared/shared.module";
import { ProfileComponent } from './profile/profile.component';
import { DepositComponent } from './wallet/deposit/deposit.component';
import { WithdrawComponent } from './wallet/withdraw/withdraw.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DepositMethodComponent } from './wallet/deposit-method/deposit-method.component';
import { WalletTransferComponent } from './wallet/wallet-transfer/wallet-transfer.component';
import { ConnectMetamaskComponent } from './wallet/connect-metamask/connect-metamask.component';
import { CommonModule } from "@angular/common";
import { MetamaskPayComponent } from "./wallet/connect-metamask/metamask-pay/metamask-pay.component";
import {ClipboardModule} from '@angular/cdk/clipboard';
import { StkingVerificationComponent } from "./staking/stking-verification/stking-verification.component";
import { EarnsStackComponent } from './earns-stack/earns-stack.component';
import { NgxPaginationModule } from "ngx-pagination";
import { LoaderComponent } from './loader/loader.component';
import { EarnsafeVerificationComponent } from './staking/earnsafe-verification/earnsafe-verification.component';
import { EarnmaxVerificationComponent } from './staking/earnmax-verification/earnmax-verification.component';
import { EarnSummaryComponent } from './staking/earn-summary/earn-summary.component';
import { EarnPhoneverificationComponent } from './staking/earn-phoneverification/earn-phoneverification.component';
import { EarnCongratulationComponent } from './staking/earn-congratulation/earn-congratulation.component';
import { EarnsafePhoneverificationComponent } from './staking/earnsafe-phoneverification/earnsafe-phoneverification.component';
import { EarnsafeCongratulationComponent } from './staking/earnsafe-congratulation/earnsafe-congratulation.component';
import { EarnmaxCongratulationComponent } from './staking/earnmax-congratulation/earnmax-congratulation.component';
import { EarnmaxPhoneverificationComponent } from './staking/earnmax-phoneverification/earnmax-phoneverification.component';
import { EarnmaxSummaryComponent } from './staking/earnmax-summary/earnmax-summary.component';
import { EarnsafeSummaryComponent } from './staking/earnsafe-summary/earnsafe-summary.component';
import { AddAddressComponent } from './wallet/add-address/add-address.component';
import { WithdrawSummaryComponent } from './wallet/withdraw-summary/withdraw-summary.component';
import { WithdrawVerificationComponent } from './wallet/withdraw-verification/withdraw-verification.component';
import { StackingHistoryComponent } from './stacking-history/stacking-history.component';
import { AddressVerificationComponent } from './wallet/address-verification/address-verification.component';
import { MetaMaskComponent } from './wallet/meta-mask/meta-mask.component';
import { Auth1Guard } from "./auth1.guard";
import { NgApexchartsModule } from 'ng-apexcharts';
import { RoundOfPipe } from "../round-of.pipe";
import { AmbessdorComponent } from './ambessdor/ambessdor.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate:[Auth1Guard],
   
    children: [
      { path: '', component: MainComponent},
      {
        path: 'wallet',
        component: WalletComponent,
        children: [
          { path: '', component: DepositMethodComponent },
          { path: 'method', component: DepositComponent },
          { path: 'meeta-mask', component: MetaMaskComponent },
          
          { path: 'transfer', component: WalletTransferComponent },
    
          { path: 'connect', component: ConnectMetamaskComponent },
          { path: 'metamask-payment', component: MetamaskPayComponent }
        ]
      },
      { path: 'history', component: HistoryComponent  },
      { path: 'stacking-history/:id', component: StackingHistoryComponent  },
      { path: 'staking', component: StakingComponent  },
      { path: 'earnstack/:id', component: EarnsStackComponent },
      { path: 'earnsummary/:id', component: EarnSummaryComponent },
      { path: 'earn-congratulation', component: EarnCongratulationComponent },
      { path: 'earn-phoneverification/:id', component: EarnPhoneverificationComponent},
      { path: 'staking-verification', component: StkingVerificationComponent  },
      { path: 'earnsafe-verification/:id', component: EarnsafeVerificationComponent },
      { path: 'earnsafe-summary/:id', component: EarnsafeSummaryComponent },
      { path: 'earnsafe-phoneverification/:id', component: EarnsafePhoneverificationComponent },
      { path: 'earnsafe-congratulation', component: EarnsafeCongratulationComponent },
      { path: 'earnmax-verification/:id', component: EarnmaxVerificationComponent },
      { path: 'earnmax-summary/:id', component: EarnmaxSummaryComponent },
      { path: 'earnmax-phoneverification/:id', component: EarnmaxPhoneverificationComponent },
      { path: 'earnmax-congratulation', component: EarnmaxCongratulationComponent },
      { path: 'referral', component: ReferralComponent },
      { path: 'ambassador', component: AmbessdorComponent },
      { path: 'profile', component: ProfileComponent  },
      { path: 'withdraw', component: WithdrawComponent },
      { path: 'withdraw-summary', component: WithdrawSummaryComponent },
      { path: 'withdrawal-verification', component: WithdrawVerificationComponent },
      { path: 'add-address', component: AddAddressComponent },
      { path: 'add-verification', component: AddressVerificationComponent }
  ]}
]

@NgModule({
  declarations: [
    DashboardComponent,
    WalletComponent,
    StakingComponent,
    HistoryComponent,
    ReferralComponent,
    MainComponent,
    ProfileComponent,
    DepositComponent,
    WithdrawComponent,
    DepositMethodComponent,
    WalletTransferComponent,
    ConnectMetamaskComponent,
    MetamaskPayComponent,
    EarnsStackComponent,
    LoaderComponent,
    EarnsafeVerificationComponent,
    EarnmaxVerificationComponent,
    EarnSummaryComponent,
    EarnPhoneverificationComponent,
    EarnCongratulationComponent,
    EarnsafePhoneverificationComponent,
    EarnsafeCongratulationComponent,
    EarnmaxCongratulationComponent,
    EarnmaxPhoneverificationComponent,
    EarnmaxSummaryComponent,
    EarnsafeSummaryComponent,
    AddAddressComponent,
    WithdrawSummaryComponent,
    WithdrawVerificationComponent,
    StackingHistoryComponent,
    AddressVerificationComponent,
    MetaMaskComponent,
    RoundOfPipe,
    AmbessdorComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ClipboardModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    ClipboardModule,
    
  
  ],

})
export class DashboardModule {}
