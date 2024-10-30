import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-earnsafe-verification',
  templateUrl: './earnsafe-verification.component.html',
  styleUrls: ['./earnsafe-verification.component.css']
})
export class EarnsafeVerificationComponent implements OnInit {
  userAdd!:FormGroup
  getId:any;
  earnId: any = '';
  earnData: any;
  amount:any=String   
  chkAcceptTerms:any
  copyArr: any;
  page: number = 0;
filterObj:any={p:0,limit:15}
count!: number
  earnData1: any;
  value: any;
  usdBal: any;

  constructor(public api:DashboardService,private router:Router,private activateRoute:ActivatedRoute,private formbuilder:FormBuilder,) {
   }

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

  earnSafeSummary(id:number){
    this.amount =
    {
      amount: this.userAdd.get('coin')?.value,
    }
    console.log("",this.earnData.maxLimit)
    if (this.amount.amount > this.earnData.maxLimit){  
    }

    else if (this.amount.amount < this.earnData.minLimit){
    }
   
    else{
     window.localStorage.setItem('amount',JSON.stringify(this.amount));
     this.router.navigate(['/dashboard/earnsafe-summary',id]);
    
    
    }
  
   
  }

  inputValue(event:any){
    this.value=event.target.value
    this.usdBal=this.earnData.usdConversion*this.value
    console.log("vivek",this.usdBal)
  }

}
