import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-earnsafe-summary',
  templateUrl: './earnsafe-summary.component.html',
  styleUrls: ['./earnsafe-summary.component.css']
})
export class EarnsafeSummaryComponent implements OnInit {

  getId:any;
  earnId: any = '';
  earnData: any;
  party1:any;
  party: any;
  chkAcceptTerms:any;

  constructor(public api:DashboardService,private router:Router,private activateRoute:ActivatedRoute,private formbuilder:FormBuilder,) {
   }

  ngOnInit(): void {  

    this.getEarnStack();
    
  }

  getEarnStack(){
    this.api.earnStackData(this.activateRoute.snapshot.params['id']).subscribe((res:any)=>{
      if(res){
        
        this.earnData=res.data

        console.log("abc",this.earnData)
      }

      let lockData  =  this.earnData.staking_period

      let date =  new Date();

       let matureDate= date.setDate(date.getDate() + lockData);
 
       console.log("monk",date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear())
     
    


    })

    this.party1 = window.localStorage.getItem('amount');
    if(this.party1){
      this.party = JSON.parse(this.party1)
      console.log("abc", this.party)
    }

   
  }

  earnSafeSummary(id:number){
    this.router.navigate(['/dashboard/earnsafe-phoneverification',id]);
    

  }

}
