import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-earnmax-verification',
  templateUrl: './earnmax-verification.component.html',
  styleUrls: ['./earnmax-verification.component.css']
})
export class EarnmaxVerificationComponent implements OnInit {
  getId:any='1';
  earnData: any;
  userAdd!:FormGroup;
  amount:any=Number;
  chkAcceptTerms:any
  copyArr: any;
  page: number = 0;
filterObj:any={p:0,limit:15}
count!: number
  earnData1: any;


  constructor(public api:DashboardService,private router:Router,private activateRoute:ActivatedRoute,private formbuilder:FormBuilder,) { }

  ngOnInit(): void {

    this.userAdd = this.formbuilder.group({     
     
      coin:[''],
      
     
      
    })

    this.api.earnStackData(this.activateRoute.snapshot.params['id']).subscribe((res:any)=>{
      if(res){
        
        this.earnData = res.data;
       console.log("vivek",this.earnData)
    
        const addDays = (date: Date, days: number): Date => {
          date.setDate(date.getDate() + days);
          return date;
        };
    
      }

  })

    this.getEarnStack();
   
  }

  getEarnStack(){
    // this.activateRoute.snapshot.params['id']
    this.api.earnStackData1(this.page).subscribe((res:any)=>{   
      if(res){
        
        this.earnData1 = res.data;
        this.copyArr=res.total_records;
       console.log("viv",this.earnData1)
    
        const addDays = (date: Date, days: number): Date => {
          date.setDate(date.getDate() + days);
          return date;
        };
    
      }
    })
  }

  pageChangeEvent(event: number){
    this.page = event-1;
    this.filterObj.p=event;  
    this.filterObj.page=event;
    this.getEarnStack()
  }

  earnMaxSummary(id:number){
    this.amount =
    {
      amount: this.userAdd.get('coin')?.value,
    }
    if (this.amount.amount > this.earnData.maxLimit){  
    }

    else if (this.amount.amount < this.earnData.minLimit){
    }
   
    else{
     window.localStorage.setItem('amount',JSON.stringify(this.amount));
     this.router.navigate(['/dashboard/earnmax-summary',id]);
    
    
    }
  }
  

}
