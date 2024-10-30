import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-earnmax-summary',
  templateUrl: './earnmax-summary.component.html',
  styleUrls: ['./earnmax-summary.component.css']
})
export class EarnmaxSummaryComponent implements OnInit {


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
    })
    this.party1 = window.localStorage.getItem('amount');
    if(this.party1){
      this.party = JSON.parse(this.party1)
      console.log("abc", this.party)
    }
  
  }

  earnMaxSummary(id:number){
    this.router.navigate(['/dashboard/earnmax-phoneverification',id]);
    

  }

 
 

}
