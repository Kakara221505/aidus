import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-referral',
  templateUrl: './referral.component.html',
  styleUrls: ['./referral.component.css']
})
export class ReferralComponent implements OnInit {
  referData: any;
  referDataList: any;
  ambesdor:any
  page: number = 0;
  signUuLink="https://aidus.io//#/auth/signup";
  // signUuLink="http://localhost:4200/#/auth/signup"
  content = 'Hello, i am tiny text and copied from somewhere else :)';
  message=false
  message1=false
  signUuLink1: any;
  referData1: any;
  user4: any;
  sort:any="new"
filterNew:any="0";
filterObj:any={p:0,limit:15}
  total: any;
  copyArr: any;
  constructor(public api:DashboardService,private clipboardApi: ClipboardService) { }

  ngOnInit(): void {
    this.getRefrelData()
    this.getambessdorData()
   
   console.log("vivek",this.signUuLink1)
  }

  copyText() {
   this.message=true
    this.clipboardApi.copyFromContent(this.referData1.referCode)
  }


  copyText1() {
    this.message1=true
    this.clipboardApi.copyFromContent(this.signUuLink1)
  }


  getRefrelData(){
    this.api.refrelData().subscribe((res:any)=>{
     
        this.referData=res.data.ambassador
        this.referData1=res.data
        this.referDataList=res.data.referList
        this.signUuLink1=this.signUuLink+'/'+this.referData1.referCode

       console.log("viveksafsd",this.referData1)
      
    })

  }


  getambessdorData(){
    this.api.getambessdor(this.page,this.sort,this.filterNew).subscribe((res:any)=>{
      this.user4 = res.data;
      this.total = res.total
      this.copyArr=res.total_records;
      console.log("viv",this.user4)
      })

  }

  pageChangeEvent4(event: any){
    this.page = event-1;
    this.filterObj.p=event;  
    this.filterObj.page=event;
    this.getambessdorData()
  }

}
