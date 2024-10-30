
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-staking',
  templateUrl: './staking.component.html',
  styleUrls: ['./staking.component.css']
})
export class StakingComponent implements OnInit {

  earn=true
  earnSafe=false
  earnMax=false
  earnMaxummery=false
  copyArr: any;
  page: number = 0;
filterObj:any={p:0,limit:15}
filterObj1:any={p1:0,limit:15}
filterObj2:any={p2:0,limit:15}
filterObj3:any={p3:0,limit:15}
count!: number
  earnData1: any;
   
  id:any='';
  depositData:any
  user1: any;
  user2: any;
  copyArr1: any;
  total1: any;
  total2: any;
  copyArr2: any;
  total3: any;
  copyArr3: any;
  constructor(public api:DashboardService,private router:Router) {
   
   }
user:any;
p:  any = 'earn';
p1:  any = 'earn safe';
p2:  any = 'earn maximum';
total:number = 0;

  ngOnInit(): void {
    this.getEarnDataList();
    this. getEarnStack()
  }


  earnfunction(){
    this.earn=true
    this.getEarnDataList();
    this.earnSafe=false
    this.earnMax=false  
    this.earnMaxummery=false

  }

  
  earnSafefunction(){
    this.earn=false
    this.earnSafe=true
    this.getEarnSafeDataList();
    this.earnMax=false  
    this.earnMaxummery=false

    // this.route.navigate(['dashboard/staking-verification'])
    
  }

  
  earnMaxfunction(){
    this.earn=false
    this.earnSafe=false
    this.earnMaxummery=false
    this.earnMax=true  
    this.getEarnMaxDataList();
  }

  earnMaximumSummery(){
    this.earn=false
    this.earnSafe=false
    this.earnMax=false  
    this.earnMaxummery=true
  }

  getEarnDataList(){
    this.api.getproductData(this.p).subscribe((res:any)=>{
    this.user = res.data;
    this.total1 = res.total
    this.copyArr1=res.total_records;
    console.log("viv",this.user)
    })

  }

  pageChangeEvent(event: number){
    this.page = event-1;
    this.filterObj1.p1=event;  
    this.filterObj1.page=event;
    this.getEarnDataList()
  }


  getEarnSafeDataList(){
    this.api.getproductData(this.p1).subscribe((res:any)=>{
    this.user1 = res.data;
    this.total2 = res.total
    this.copyArr2=res.total_records;
    console.log("vivek",this.user)
    })

  }

  
  pageChangeEvent2(event: number){
    this.page = event-1;
    this.filterObj2.p2=event;  
    this.filterObj2.page=event;
    this.getEarnSafeDataList()
  }

  getEarnMaxDataList(){
    this.api.getproductData(this.p2).subscribe((res:any)=>{
    this.user2 = res.data;
    this.total3 = res.total;
    this.copyArr3=res.total_records;
    })

  }
  pageChangeEvent3(event: number){
    this.page = event-1;
    this.filterObj3.p3=event;  
    this.filterObj3.page=event;
    this.getEarnMaxDataList()
  }

  editRow(id:number){
    this.router.navigate(['/dashboard/earnstack',id]);
  }

  editMaxRow(id:number){
    this.router.navigate(['/dashboard/earnmax-verification',id]);
  }

  editSafe(id:number){
    this.router.navigate(['/dashboard/earnsafe-verification',id]);
  }

  getEarnStack(){
    // this.activateRoute.snapshot.params['id']
    this.api.earnStackData1(this.page).subscribe((res:any)=>{   
  
        
        this.earnData1 = res.data;
        this.total = res.total
        this.copyArr=res.total_records;
       console.log("hgsadh",this.copyArr)
    
        // const addDays = (date: Date, days: number): Date => {
        //   date.setDate(date.getDate() + days);
        //   return date;
        // };
    
      
    })
  }
  pageChangeEvent1(event: any){
    this.page = event-1;
    this.filterObj.p=event;  
    this.filterObj.page=event;
    this.getEarnStack()
  }

}
