import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StakingComponent } from './staking/staking.component';

const routes: Routes = [
    { path: 'stack', component: StakingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
