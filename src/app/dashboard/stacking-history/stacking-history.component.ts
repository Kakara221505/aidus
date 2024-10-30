import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-stacking-history',
  templateUrl: './stacking-history.component.html',
  styleUrls: ['./stacking-history.component.css']
})
export class StackingHistoryComponent implements OnInit {
  copyArr: any;
  interest: any;

  constructor(public api:DashboardService,private activateRoute:ActivatedRoute,) {
    this.getDepositTransactionlist()
   }
user:any;
p:number = 0;
page: number = 0;
filterObj:any={p:0,limit:15}
count!: number;
date:any=''
date1:any=''

  ngOnInit(): void {
    this.getDepositTransactionlist()
  
  }

  getDepositTransactionlist(){
    this.api.stackHistory(this.activateRoute.snapshot.params['id'],this.page).subscribe((res:any)=>{
    this.user = res.data;
    this.interest = res.data.interest;
    this.copyArr=res.total_records;
    console.log("viv",this.interest)
    })

  }
  pageChangeEvent(event: number){
    this.page = event-1;
    this.filterObj.p=event;  
    this.filterObj.page=event;
    this.getDepositTransactionlist()
  }



  stakHistroyPdf(){
    this.api.stackIntrestPdf(this.activateRoute.snapshot.params['id']).subscribe((data:any)=>{

      const file = data;
      const url = window.URL.createObjectURL(
        new Blob([data as BlobPart], { type: 'application/vnd.pdf' })
      );
      var link = document.createElement('a');
      document.body.appendChild(link);
      link.setAttribute('style', 'display: none');
      link.href = url;
      link.download = `Staking-Intrest.pdf`;
      link.click();
     
      window.location.reload();
     
    })
  }

  histroyPdf1(){
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    
   let date = yyyy + '-' + mm + '-' + dd;
   console.log("vivek",date)

   let aDate = new Date();
aDate.setDate(aDate.getDate() - 1);
let dd1 = String(aDate.getDate()).padStart(2, '0');
    let mm1 = String(aDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy1 = aDate.getFullYear();
    let date2 = yyyy1  + '-' + mm1+ '-' + dd1;
   console.log("vivek",date2)
  
    
    this.api.histroyPdf(date2,date).subscribe((data:any)=>{
     
      const file = data;
      const url = window.URL.createObjectURL(
        new Blob([data as BlobPart], { type: 'application/vnd.pdf' })
      );
      var link = document.createElement('a');
      document.body.appendChild(link);
      link.setAttribute('style', 'display: none');
      link.href = url;
      link.download = `Transaction.pdf`;
      link.click();
     
      window.location.reload();
     
    })
     
  
  }

  histroyPdf2(){
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    
   let date = yyyy + '-' + mm + '-' + dd;
   console.log("vivek",date)

   let aDate = new Date();
aDate.setDate(aDate.getDate() - 7);
let dd1 = String(aDate.getDate()).padStart(2, '0');
    let mm1 = String(aDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy1 = aDate.getFullYear();
    let date2 = yyyy1  + '-' + mm1+ '-' + dd1;
   console.log("vivek",date2)

   
  
    
    this.api.histroyPdf(date2,date).subscribe((data:any)=>{
      const file = data;
      const url = window.URL.createObjectURL(
        new Blob([data as BlobPart], { type: 'application/vnd.pdf' })
      );
      var link = document.createElement('a');
      document.body.appendChild(link);
      link.setAttribute('style', 'display: none');
      link.href = url;
      link.download = `Transaction.pdf`;
      link.click();
     
      window.location.reload();
     
    })
       
  }

  histroyPdf3(){
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    
   let date = yyyy + '-' + mm + '-' + dd;
   console.log("vivek",date)

   let aDate = new Date();
aDate.setDate(aDate.getDate() - 14);
let dd1 = String(aDate.getDate()).padStart(2, '0');
    let mm1 = String(aDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy1 = aDate.getFullYear();
    let date2 = yyyy1  + '-' + mm1+ '-' + dd1;
   console.log("vivek",date2)

   
  
    
    this.api.histroyPdf(date2,date).subscribe((data:any)=>{
      const file = data;
      const url = window.URL.createObjectURL(
        new Blob([data as BlobPart], { type: 'application/vnd.pdf' })
      );
      var link = document.createElement('a');
      document.body.appendChild(link);
      link.setAttribute('style', 'display: none');
      link.href = url;
      link.download = `Transaction.pdf`;
      link.click();
     
      window.location.reload();
     
    })
     

  }

  histroyPdf4(){
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    
   let date = yyyy + '-' + mm + '-' + dd;
   console.log("vivek",date)

   let aDate = new Date();
aDate.setDate(aDate.getDate() - 30);
let dd1 = String(aDate.getDate()).padStart(2, '0');
    let mm1 = String(aDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy1 = aDate.getFullYear();
    let date2 = yyyy1  + '-' + mm1+ '-' + dd1;
   console.log("vivek",date2)

   
  
    
    this.api.histroyPdf(date2,date).subscribe((data:any)=>{
     
      const file = data;
      const url = window.URL.createObjectURL(
        new Blob([data as BlobPart], { type: 'application/vnd.pdf' })
      );
      var link = document.createElement('a');
      document.body.appendChild(link);
      link.setAttribute('style', 'display: none');
      link.href = url;
      link.download = `Transaction.pdf`;
      link.click();
     
      window.location.reload();
     
    })
  }

  histroyPdf5(){
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    
   let date = yyyy + '-' + mm + '-' + dd;
   console.log("vivek",date)

   let aDate = new Date();
aDate.setDate(aDate.getDate() - 90);
let dd1 = String(aDate.getDate()).padStart(2, '0');
    let mm1 = String(aDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy1 = aDate.getFullYear();
    let date2 = yyyy1  + '-' + mm1+ '-' + dd1;
   console.log("vivek",date2)

   
  
    
    this.api.histroyPdf(date2,date).subscribe((data:any)=>{
     
      const file = data;
      const url = window.URL.createObjectURL(
        new Blob([data as BlobPart], { type: 'application/vnd.pdf' })
      );
      var link = document.createElement('a');
      document.body.appendChild(link);
      link.setAttribute('style', 'display: none');
      link.href = url;
      link.download = `Transaction.pdf`;
      link.click();
     
      window.location.reload();
     
    })
  }

  histroyPdf6(){
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    
   let date = yyyy + '-' + mm + '-' + dd;
   console.log("vivek",date)

   let aDate = new Date();
aDate.setDate(aDate.getDate() - 180);
let dd1 = String(aDate.getDate()).padStart(2, '0');
    let mm1 = String(aDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy1 = aDate.getFullYear();
    let date2 = yyyy1  + '-' + mm1+ '-' + dd1;
   console.log("vivek",date2)

   
  
    
    this.api.histroyPdf(date2,date).subscribe((data:any)=>{
     
      const file = data;
      const url = window.URL.createObjectURL(
        new Blob([data as BlobPart], { type: 'application/vnd.pdf' })
      );
      var link = document.createElement('a');
      document.body.appendChild(link);
      link.setAttribute('style', 'display: none');
      link.href = url;
      link.download = `Transaction.pdf`;
      link.click();
     
      window.location.reload();
     
    })
  }


}
