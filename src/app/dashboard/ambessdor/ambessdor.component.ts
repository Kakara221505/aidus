import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-ambessdor',
  templateUrl: './ambessdor.component.html',
  styleUrls: ['./ambessdor.component.css']
})
export class AmbessdorComponent implements OnInit {

  referData: any;
  referDataList: any;
  ambesdor:any
  signUuLink="https://aidus.io//#/auth/signup";
  // signUuLink="http://localhost:4200/#/auth/signup"
  content = 'Hello, i am tiny text and copied from somewhere else :)';
  message=false
  message1=false
  signUuLink1: any;
  referData1: any;
  constructor(public api:DashboardService,private clipboardApi: ClipboardService) { }

  ngOnInit(): void {
    this.getRefrelData()
   
   console.log("vivek",this.signUuLink1)
  }

  copyText() {
   this.message=true
    this.clipboardApi.copyFromContent(this.referData.referCode)
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

       console.log("vivek",this.referData)
      
    })

  }


}
