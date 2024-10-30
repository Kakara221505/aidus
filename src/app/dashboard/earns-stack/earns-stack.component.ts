import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-earns-stack',
  templateUrl: './earns-stack.component.html',
  styleUrls: ['./earns-stack.component.css']
})
export class EarnsStackComponent implements OnInit {
  p:  any = 'earn';
  userAdd!:FormGroup
  getId:any;
  earnId: any = '';
  earnData: any;
  startDate: any;
  endDate: any;
  amt=false;
  earn: any;
  chkAcceptTerms:any 
  amount:any=Number
page: number = 0;
filterObj:any={p:0,limit:15}
count!: number
  copyArr: any;
  earnData1: any;
  total: any;

  constructor(public api:DashboardService,private router:Router,private activateRoute:ActivatedRoute,private formbuilder:FormBuilder,) {
   }

  ngOnInit(): void {

    this.userAdd = this.formbuilder.group({     
     
      coin:[''],
      
     
      
    })

    this.api.earnStackData(this.activateRoute.snapshot.params['id']).subscribe((res:any)=>{
      if(res){
        
        this.earnData = res.data;
        this.copyArr=res.total_records;
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
     
        
        this.earnData1 = res.data;
        this.copyArr=res.total_records;
        this.total = res.total;
        console.log("vivek",this.copyArr)
        // const addDays = (date: Date, days: number): Date => {
        //   date.setDate(date.getDate() + days);
        //   return date;
        // };
    
    
    })
  }

  pageChangeEvent(event: number){
    this.page = event-1;
    this.filterObj.p=event;  
    this.filterObj.page=event;
    this.getEarnStack()
  }

  

  earnSummary(id:number){
  
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
    this.router.navigate(['/dashboard/earnsummary',id]);
    
    
    }

  }


  

  
}
