import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  depositData:any
  exportHours=false
  exportDays=false
  exportWeek=false
  exportMonth=false
  exportMonth1=false
  exportMonth2=false
  exportRange=true
  date:any=''
  date2:any=''
  earn=true
  stackingData:any
  totalPage:any
  depositeData=false
  depositHistory=false;
  withdrawData=false
  allData=true
  stackData=false
  ambessdorData=false
  bonousData=false
  copyArr:any   
  math=Math;                                                                                                                                                                                                                                                                                                                                                                                                                                       
  setDob: any;
  blob: any;
  user1: any;
  user2: any;
  user3: any;
  user4: any;
  user5: any;
  a: any;
  constructor(public api:DashboardService,private router:Router) {
    this.getDepositTransactionlist()
   }
user:any;
page: number = 0;
sort:any="new"
filterNew:any="0";
filterObj:any={p:0,limit:15}
count!: number;
total:any
  ngOnInit(): void {
    this.getDepositTransactionlist()
    this.a= localStorage.getItem('ambessdor')
    console.log("dsgdfjk",this.a)
  }

  getDepositTransactionlist(){
    this.depositeData=false 
    this.allData=true
    this.withdrawData=false
    this.stackData=false
    this.ambessdorData=false
    this.bonousData=false
    this.api.getData(this.page,this.sort,this.filterNew).subscribe((res:any)=>{
    this.user = res.data;
    this.copyArr=res.total_records;
  
                                                             
   
    // this.total = res.data.length
    console.log("viv",this.copyArr)
    })

  }

  pageChangeEvent(event: any){
    this.page = event-1;
    this.filterObj.p=event;  
  
    this.getDepositTransactionlist()
  }

  sortFilter(text:any,filter:any){
    this.sort=text
    this.filterNew=filter
    this.depositeData=false 
    this.allData=true
    this.withdrawData=false
    this.stackData=false
    this.ambessdorData=false
    this.bonousData=false
    this.api.getData(this.page,this.sort,this.filterNew).subscribe((res:any)=>{
    this.user = res.data;
    this.copyArr=res.total_records;
  
                                                             
   
    // this.total = res.data.length
    console.log("viv",this.copyArr)
    })
  }

 

 

 

  earnfunction(){
    this.earn=true
    this.depositHistory =false  

  }

  earnfunction1(){
    this.earn=false
    this.depositHistory =true  

  }

  deposite(){

    this.depositeData=true 
    this.allData=false
    this.withdrawData=false
    this.stackData=false
    this.ambessdorData=false
    this.bonousData=false
    this.api.getDepositeData(this.page,this.sort,this.filterNew).subscribe((res:any)=>{
      this.user1 = res.data;
      this.total = res.total
      this.copyArr=res.total_records;
      console.log("viv",this.copyArr)
      })
  }

  sortFilterDeposite(text:any,filter:any){
    this.sort=text
    this.filterNew=filter
    this.depositeData=true 
    this.allData=false
    this.withdrawData=false
    this.stackData=false
    this.ambessdorData=false
    this.bonousData=false
    this.api.getDepositeData(this.page,this.sort,this.filterNew).subscribe((res:any)=>{
      this.user1 = res.data;
      this.total = res.total
      this.copyArr=res.total_records;
      })
  }

  pageChangeEvent1(event: any){
    this.page = event-1;
    this.filterObj.p=event;  
    // this.filterObj.page=event;
    this.deposite()
  }

  withdraw(){
    this.depositeData=false 
    this.allData=false
    this.withdrawData=true
    this.stackData=false
    this.ambessdorData=false
    this.bonousData=false
    this.api.getWithdrawData(this.page,this.sort,this.filterNew).subscribe((res:any)=>{
      this.user2 = res.data;
      this.total = res.total
      this.copyArr=res.total_records;
      })
  }
  sortFilterWithdraw(text:any,filter:any){
    this.sort=text
    this.filterNew=filter
    this.depositeData=false 
    this.allData=false
    this.withdrawData=true
    this.ambessdorData=false
    this.bonousData=false
    this.stackData=false
    this.api.getWithdrawData(this.page,this.sort,this.filterNew).subscribe((res:any)=>{
      this.user2 = res.data;
      this.total = res.total
      this.copyArr=res.total_records;
      })
  }

  pageChangeEvent2(event: any){
    this.page = event-1;
    this.filterObj.p=event;  
    this.filterObj.page=event;
    this.withdraw()
  }

  stack(){
    this.depositeData=false 
    this.allData=false
    this.withdrawData=false
    this.stackData=true
    this.ambessdorData=false
    this.bonousData=false
    this.api.getStackData(this.page,this.sort,this.filterNew).subscribe((res:any)=>{
      this.user3 = res.data;
      this.total = res.total
      this.copyArr=res.total_records;
      console.log("viv",this.user)
      })
  }

  sortFilterStacked(text:any,filter:any){
    this.sort=text
    this.filterNew=filter
    this.depositeData=false 
    this.allData=false
    this.withdrawData=false
    this.stackData=true
    this.ambessdorData=false
    this.bonousData=false
    this.api.getStackData(this.page,this.sort,this.filterNew).subscribe((res:any)=>{
      this.user3 = res.data;
      this.total = res.total
      this.copyArr=res.total_records;
      console.log("viv",this.user)
      })
  }

  pageChangeEvent3(event: any){
    this.page = event-1;
    this.filterObj.p=event;  
    this.filterObj.page=event;
    this.stack()
  }
  stackHistory(id:number){
    this.router.navigate(['/dashboard/stacking-history',id]);
    

  }


  ambessdor(){
    this.depositeData=false 
    this.allData=false
    this.withdrawData=false
    this.stackData=false
    this.ambessdorData=true
    this.bonousData=false
    this.api.getambessdor(this.page,this.sort,this.filterNew).subscribe((res:any)=>{
      this.user4 = res.data;
      this.total = res.total
      this.copyArr=res.total_records;
      console.log("viv",this.user)
      })
  }

  sortFilterambessdor(text:any,filter:any){
    this.sort=text
    this.filterNew=filter
    this.depositeData=false 
    this.allData=false
    this.withdrawData=false
    this.stackData=false
    this.ambessdorData=true
    this.api.getambessdor(this.page,this.sort,this.filterNew).subscribe((res:any)=>{
      this.user4 = res.data;
      this.total = res.total
      this.copyArr=res.total_records;
      console.log("viv",this.user)
      })
  }

  pageChangeEvent4(event: any){
    this.page = event-1;
    this.filterObj.p=event;  
    this.filterObj.page=event;
    this.ambessdor()
  }

  referral(){
    this.depositeData=false 
    this.allData=false
    this.withdrawData=false
    this.stackData=false
    this.ambessdorData=false
    this.bonousData=true
    this.api.getReferralData(this.page,this.sort,this.filterNew).subscribe((res:any)=>{
      this.user5 = res.data;
      this.total = res.total
      this.copyArr=res.total_records;
      console.log("viv",this.user)
      })
  }

  sortFilterreferrel(text:any,filter:any){
    this.sort=text
    this.filterNew=filter
    this.depositeData=false 
    this.allData=false
    this.withdrawData=false
    this.stackData=false
    this.ambessdorData=false
    this.bonousData=true
    this.api.getReferralData(this.page,this.sort,this.filterNew).subscribe((res:any)=>{
      this.user5 = res.data;
      this.total = res.total
      this.copyArr=res.total_records;
      console.log("viv",this.user)
      })
  }

  pageChangeEvent5(event: any){
    this.page = event-1;
    this.filterObj.p=event;  
    this.filterObj.page=event;
    this.referral()
  }
 

  histroyPdf(){
    this.api.histroyPdf(this.date,this.date2).subscribe((data:any)=>{

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



// Deposite Hitory

depositeHistroyPdf(){
  this.api.depositeHistroyPdf(this.date,this.date2).subscribe((data:any)=>{

    const file = data;
    const url = window.URL.createObjectURL(
      new Blob([data as BlobPart], { type: 'application/vnd.pdf' })
    );
    var link = document.createElement('a');
    document.body.appendChild(link);
    link.setAttribute('style', 'display: none');
    link.href = url;
    link.download = `Deposite-Transaction.pdf`;
    link.click();
   
    window.location.reload();
   
  })
}

dHistroyPdf1(){
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

  
  this.api.depositeHistroyPdf(date2,date).subscribe((data:any)=>{
   
    const file = data;
    const url = window.URL.createObjectURL(
      new Blob([data as BlobPart], { type: 'application/vnd.pdf' })
    );
    var link = document.createElement('a');
    document.body.appendChild(link);
    link.setAttribute('style', 'display: none');
    link.href = url;
    link.download = `Deposite-Transaction.pdf`;
    link.click();
   
    window.location.reload();
   
  })
   

}

dHistroyPdf2(){
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

 

  
  this.api.depositeHistroyPdf(date2,date).subscribe((data:any)=>{
    const file = data;
    const url = window.URL.createObjectURL(
      new Blob([data as BlobPart], { type: 'application/vnd.pdf' })
    );
    var link = document.createElement('a');
    document.body.appendChild(link);
    link.setAttribute('style', 'display: none');
    link.href = url;
    link.download = `Deposite-Transaction.pdf`;
    link.click();
   
    window.location.reload();
   
  })
     
}

dHistroyPdf3(){
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

 

  
  this.api.depositeHistroyPdf(date2,date).subscribe((data:any)=>{
    const file = data;
    const url = window.URL.createObjectURL(
      new Blob([data as BlobPart], { type: 'application/vnd.pdf' })
    );
    var link = document.createElement('a');
    document.body.appendChild(link);
    link.setAttribute('style', 'display: none');
    link.href = url;
    link.download = `Deposite-Transaction.pdf`;
    link.click();
   
    window.location.reload();
   
  })
   

}

dHistroyPdf4(){
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

 

  
  this.api.depositeHistroyPdf(date2,date).subscribe((data:any)=>{
   
    const file = data;
    const url = window.URL.createObjectURL(
      new Blob([data as BlobPart], { type: 'application/vnd.pdf' })
    );
    var link = document.createElement('a');
    document.body.appendChild(link);
    link.setAttribute('style', 'display: none');
    link.href = url;
    link.download = `Deposite-Transaction.pdf`;
    link.click();
   
    window.location.reload();
   
  })
}

dHistroyPdf5(){
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

 

  
  this.api.depositeHistroyPdf(date2,date).subscribe((data:any)=>{
   
    const file = data;
    const url = window.URL.createObjectURL(
      new Blob([data as BlobPart], { type: 'application/vnd.pdf' })
    );
    var link = document.createElement('a');
    document.body.appendChild(link);
    link.setAttribute('style', 'display: none');
    link.href = url;
    link.download = `Deposite-Transaction.pdf`;
    link.click();
   
    window.location.reload();
   
  })
}

dHistroyPdf6(){
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

 

  
  this.api.depositeHistroyPdf(date2,date).subscribe((data:any)=>{
   
    const file = data;
    const url = window.URL.createObjectURL(
      new Blob([data as BlobPart], { type: 'application/vnd.pdf' })
    );
    var link = document.createElement('a');
    document.body.appendChild(link);
    link.setAttribute('style', 'display: none');
    link.href = url;
    link.download = `Deposite-Transaction.pdf`;
    link.click();
   
    window.location.reload();
   
  })
}


withdrawHistroyPdf(){
  this.api.withdrawHistroyPdf(this.date,this.date2).subscribe((data:any)=>{

    const file = data;
    const url = window.URL.createObjectURL(
      new Blob([data as BlobPart], { type: 'application/vnd.pdf' })
    );
    var link = document.createElement('a');
    document.body.appendChild(link);
    link.setAttribute('style', 'display: none');
    link.href = url;
    link.download = `Withdraw-Transaction.pdf`;
    link.click();
   
    window.location.reload();
   
  })
}

wHistroyPdf1(){
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

  
  this.api.withdrawHistroyPdf(date2,date).subscribe((data:any)=>{
   
    const file = data;
    const url = window.URL.createObjectURL(
      new Blob([data as BlobPart], { type: 'application/vnd.pdf' })
    );
    var link = document.createElement('a');
    document.body.appendChild(link);
    link.setAttribute('style', 'display: none');
    link.href = url;
    link.download = `Withdraw-Transaction.pdf`;
    link.click();
   
    window.location.reload();
   
  })
   

}

wHistroyPdf2(){
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

 

  
  this.api.withdrawHistroyPdf(date2,date).subscribe((data:any)=>{
    const file = data;
    const url = window.URL.createObjectURL(
      new Blob([data as BlobPart], { type: 'application/vnd.pdf' })
    );
    var link = document.createElement('a');
    document.body.appendChild(link);
    link.setAttribute('style', 'display: none');
    link.href = url;
    link.download = `Withdraw-Transaction.pdf`;
    link.click();
   
    window.location.reload();
   
  })
     
}

wHistroyPdf3(){
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

 

  
  this.api.withdrawHistroyPdf(date2,date).subscribe((data:any)=>{
    const file = data;
    const url = window.URL.createObjectURL(
      new Blob([data as BlobPart], { type: 'application/vnd.pdf' })
    );
    var link = document.createElement('a');
    document.body.appendChild(link);
    link.setAttribute('style', 'display: none');
    link.href = url;
    link.download = `Withdraw-Transaction.pdf`;
    link.click();
   
    window.location.reload();
   
  })
   

}

wHistroyPdf4(){
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

 

  
  this.api.withdrawHistroyPdf(date2,date).subscribe((data:any)=>{
   
    const file = data;
    const url = window.URL.createObjectURL(
      new Blob([data as BlobPart], { type: 'application/vnd.pdf' })
    );
    var link = document.createElement('a');
    document.body.appendChild(link);
    link.setAttribute('style', 'display: none');
    link.href = url;
    link.download = `Withdraw-Transaction.pdf`;
    link.click();
   
    window.location.reload();
   
  })
}

wHistroyPdf5(){
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

 

  
  this.api.withdrawHistroyPdf(date2,date).subscribe((data:any)=>{
   
    const file = data;
    const url = window.URL.createObjectURL(
      new Blob([data as BlobPart], { type: 'application/vnd.pdf' })
    );
    var link = document.createElement('a');
    document.body.appendChild(link);
    link.setAttribute('style', 'display: none');
    link.href = url;
    link.download = `Withdraw-Transaction.pdf`;
    link.click();
   
    window.location.reload();
   
  })
}

wHistroyPdf6(){
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

 

  
  this.api.withdrawHistroyPdf(date2,date).subscribe((data:any)=>{
   
    const file = data;
    const url = window.URL.createObjectURL(
      new Blob([data as BlobPart], { type: 'application/vnd.pdf' })
    );
    var link = document.createElement('a');
    document.body.appendChild(link);
    link.setAttribute('style', 'display: none');
    link.href = url;
    link.download = `Withdraw-Transaction.pdf`;
    link.click();
   
    window.location.reload();
   
  })
}
// staking history
stakingHistroyPdf(){
  this.api.stakingHistroyPdf(this.date,this.date2).subscribe((data:any)=>{

    const file = data;
    const url = window.URL.createObjectURL(
      new Blob([data as BlobPart], { type: 'application/vnd.pdf' })
    );
    var link = document.createElement('a');
    document.body.appendChild(link);
    link.setAttribute('style', 'display: none');
    link.href = url;
    link.download = `Staking-Transaction.pdf`;
    link.click();
   
    window.location.reload();
   
  })
}

sHistroyPdf1(){
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

  
  this.api.stakingHistroyPdf(date2,date).subscribe((data:any)=>{
   
    const file = data;
    const url = window.URL.createObjectURL(
      new Blob([data as BlobPart], { type: 'application/vnd.pdf' })
    );
    var link = document.createElement('a');
    document.body.appendChild(link);
    link.setAttribute('style', 'display: none');
    link.href = url;
    link.download = `Staking-Transaction.pdf`;
    link.click();
   
    window.location.reload();
   
  })
   

}

sHistroyPdf2(){
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

 

  
  this.api.stakingHistroyPdf(date2,date).subscribe((data:any)=>{
    const file = data;
    const url = window.URL.createObjectURL(
      new Blob([data as BlobPart], { type: 'application/vnd.pdf' })
    );
    var link = document.createElement('a');
    document.body.appendChild(link);
    link.setAttribute('style', 'display: none');
    link.href = url;
    link.download = `Staking-Transaction.pdf`;
    link.click();
   
    window.location.reload();
   
  })
     
}

sHistroyPdf3(){
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

 

  
  this.api.stakingHistroyPdf(date2,date).subscribe((data:any)=>{
    const file = data;
    const url = window.URL.createObjectURL(
      new Blob([data as BlobPart], { type: 'application/vnd.pdf' })
    );
    var link = document.createElement('a');
    document.body.appendChild(link);
    link.setAttribute('style', 'display: none');
    link.href = url;
    link.download = `Staking-Transaction.pdf`;
    link.click();
   
    window.location.reload();
   
  })
   

}

sHistroyPdf4(){
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

 

  
  this.api.stakingHistroyPdf(date2,date).subscribe((data:any)=>{
   
    const file = data;
    const url = window.URL.createObjectURL(
      new Blob([data as BlobPart], { type: 'application/vnd.pdf' })
    );
    var link = document.createElement('a');
    document.body.appendChild(link);
    link.setAttribute('style', 'display: none');
    link.href = url;
    link.download = `Staking-Transaction.pdf`;
    link.click();
   
    window.location.reload();
   
  })
}

sHistroyPdf5(){
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

 

  
  this.api.stakingHistroyPdf(date2,date).subscribe((data:any)=>{
   
    const file = data;
    const url = window.URL.createObjectURL(
      new Blob([data as BlobPart], { type: 'application/vnd.pdf' })
    );
    var link = document.createElement('a');
    document.body.appendChild(link);
    link.setAttribute('style', 'display: none');
    link.href = url;
    link.download = `Staking-Transaction.pdf`;
    link.click();
   
    window.location.reload();
   
  })
}

sHistroyPdf6(){
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

 

  
  this.api.stakingHistroyPdf(date2,date).subscribe((data:any)=>{
   
    const file = data;
    const url = window.URL.createObjectURL(
      new Blob([data as BlobPart], { type: 'application/vnd.pdf' })
    );
    var link = document.createElement('a');
    document.body.appendChild(link);
    link.setAttribute('style', 'display: none');
    link.href = url;
    link.download = `Staking-Transaction.pdf`;
    link.click();
   
    window.location.reload();
   
  })
}


// ambessdor history

ambessdorHistroyPdf(){
  this.api.ambessdorHistroyPdf(this.date,this.date2).subscribe((data:any)=>{

    const file = data;
    const url = window.URL.createObjectURL(
      new Blob([data as BlobPart], { type: 'application/vnd.pdf' })
    );
    var link = document.createElement('a');
    document.body.appendChild(link);
    link.setAttribute('style', 'display: none');
    link.href = url;
    link.download = `Ambessdor-Transaction.pdf`;
    link.click();
   
    window.location.reload();
   
  })
}

aHistroyPdf1(){
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

  
  this.api.ambessdorHistroyPdf(date2,date).subscribe((data:any)=>{
   
    const file = data;
    const url = window.URL.createObjectURL(
      new Blob([data as BlobPart], { type: 'application/vnd.pdf' })
    );
    var link = document.createElement('a');
    document.body.appendChild(link);
    link.setAttribute('style', 'display: none');
    link.href = url;
    link.download = `Ambessdor-Transaction.pdf`;
    link.click();
   
    window.location.reload();
   
  })
   

}

aHistroyPdf2(){
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

 

  
  this.api.ambessdorHistroyPdf(date2,date).subscribe((data:any)=>{
    const file = data;
    const url = window.URL.createObjectURL(
      new Blob([data as BlobPart], { type: 'application/vnd.pdf' })
    );
    var link = document.createElement('a');
    document.body.appendChild(link);
    link.setAttribute('style', 'display: none');
    link.href = url;
    link.download = `Ambessdor-Transaction.pdf`;
    link.click();
   
    window.location.reload();
   
  })
     
}

aHistroyPdf3(){
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

 

  
  this.api.ambessdorHistroyPdf(date2,date).subscribe((data:any)=>{
    const file = data;
    const url = window.URL.createObjectURL(
      new Blob([data as BlobPart], { type: 'application/vnd.pdf' })
    );
    var link = document.createElement('a');
    document.body.appendChild(link);
    link.setAttribute('style', 'display: none');
    link.href = url;
    link.download = `Ambessdor-Transaction.pdf`;
    link.click();
   
    window.location.reload();
   
  })
   

}

aHistroyPdf4(){
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

 

  
  this.api.stakingHistroyPdf(date2,date).subscribe((data:any)=>{
   
    const file = data;
    const url = window.URL.createObjectURL(
      new Blob([data as BlobPart], { type: 'application/vnd.pdf' })
    );
    var link = document.createElement('a');
    document.body.appendChild(link);
    link.setAttribute('style', 'display: none');
    link.href = url;
    link.download = `Ambessdor-Transaction.pdf`;
    link.click();
   
    window.location.reload();
   
  })
}

aHistroyPdf5(){
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

 

  
  this.api.ambessdorHistroyPdf(date2,date).subscribe((data:any)=>{
   
    const file = data;
    const url = window.URL.createObjectURL(
      new Blob([data as BlobPart], { type: 'application/vnd.pdf' })
    );
    var link = document.createElement('a');
    document.body.appendChild(link);
    link.setAttribute('style', 'display: none');
    link.href = url;
    link.download = `Ambessdor-Transaction.pdf`;
    link.click();
   
    window.location.reload();
   
  })
}

aHistroyPdf6(){
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

 

  
  this.api.ambessdorHistroyPdf(date2,date).subscribe((data:any)=>{
   
    const file = data;
    const url = window.URL.createObjectURL(
      new Blob([data as BlobPart], { type: 'application/vnd.pdf' })
    );
    var link = document.createElement('a');
    document.body.appendChild(link);
    link.setAttribute('style', 'display: none');
    link.href = url;
    link.download = `Ambessdor-Transaction.pdf`;
    link.click();
   
    window.location.reload();
   
  })
}

// Referral bonous

ReferalHistroyPdf(){
  this.api.referralHistroyPdf(this.date,this.date2).subscribe((data:any)=>{

    const file = data;
    const url = window.URL.createObjectURL(
      new Blob([data as BlobPart], { type: 'application/vnd.pdf' })
    );
    var link = document.createElement('a');
    document.body.appendChild(link);
    link.setAttribute('style', 'display: none');
    link.href = url;
    link.download = `Referral-Transaction.pdf`;
    link.click();
   
    window.location.reload();
   
  })
}

rHistroyPdf1(){
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

  
  this.api.referralHistroyPdf(date2,date).subscribe((data:any)=>{
   
    const file = data;
    const url = window.URL.createObjectURL(
      new Blob([data as BlobPart], { type: 'application/vnd.pdf' })
    );
    var link = document.createElement('a');
    document.body.appendChild(link);
    link.setAttribute('style', 'display: none');
    link.href = url;
    link.download = `Referral-Transaction.pdf`;
    link.click();
   
    window.location.reload();
   
  })
   

}

rHistroyPdf2(){
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

 

  
  this.api.referralHistroyPdf(date2,date).subscribe((data:any)=>{
    const file = data;
    const url = window.URL.createObjectURL(
      new Blob([data as BlobPart], { type: 'application/vnd.pdf' })
    );
    var link = document.createElement('a');
    document.body.appendChild(link);
    link.setAttribute('style', 'display: none');
    link.href = url;
    link.download = `Referral-Transaction.pdf`;
    link.click();
   
    window.location.reload();
   
  })
     
}

rHistroyPdf3(){
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

 

  
  this.api.referralHistroyPdf(date2,date).subscribe((data:any)=>{
    const file = data;
    const url = window.URL.createObjectURL(
      new Blob([data as BlobPart], { type: 'application/vnd.pdf' })
    );
    var link = document.createElement('a');
    document.body.appendChild(link);
    link.setAttribute('style', 'display: none');
    link.href = url;
    link.download = `Referral-Transaction.pdf`;
    link.click();
   
    window.location.reload();
   
  })
   

}

rHistroyPdf4(){
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

 

  
  this.api.referralHistroyPdf(date2,date).subscribe((data:any)=>{
   
    const file = data;
    const url = window.URL.createObjectURL(
      new Blob([data as BlobPart], { type: 'application/vnd.pdf' })
    );
    var link = document.createElement('a');
    document.body.appendChild(link);
    link.setAttribute('style', 'display: none');
    link.href = url;
    link.download = `Referral-Transaction.pdf`;
    link.click();
   
    window.location.reload();
   
  })
}

rHistroyPdf5(){
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

 

  
  this.api.referralHistroyPdf(date2,date).subscribe((data:any)=>{
   
    const file = data;
    const url = window.URL.createObjectURL(
      new Blob([data as BlobPart], { type: 'application/vnd.pdf' })
    );
    var link = document.createElement('a');
    document.body.appendChild(link);
    link.setAttribute('style', 'display: none');
    link.href = url;
    link.download = `Referral-Transaction.pdf`;
    link.click();
   
    window.location.reload();
   
  })
}

rHistroyPdf6(){
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

 

  
  this.api.referralHistroyPdf(date2,date).subscribe((data:any)=>{
   
    const file = data;
    const url = window.URL.createObjectURL(
      new Blob([data as BlobPart], { type: 'application/vnd.pdf' })
    );
    var link = document.createElement('a');
    document.body.appendChild(link);
    link.setAttribute('style', 'display: none');
    link.href = url;
    link.download = `Referral-Transaction.pdf`;
    link.click();
   
    window.location.reload();
   
  })
}





  doSomething(event:any){
    this.date=event
   
 }

 doSomething1(event:any){
  this.date2=event
  // input value is logged
}


// Export Pdf handle
exportPdf(){
  this.exportHours=true
  this.exportDays=false
  this.exportWeek=false
  this.exportMonth=false
  this.exportRange=false
  this.exportMonth1=false
  this.exportMonth2=false
  
}
exportPdf1(){
  this.exportHours=false
  this.exportRange=false
  this.exportDays=true
  this.exportWeek=false
  this.exportMonth=false
  this.exportMonth1=false
  this.exportMonth2=false
 
}
exportPdf2(){
  this.exportHours=false
  this.exportDays=false
  this.exportWeek=true
  this.exportMonth=false
  this.exportMonth1=false
  this.exportRange=false
  this.exportMonth2=false
  
}
exportPdf3(){
  this.exportHours=false
  this.exportDays=false
  this.exportWeek=false
  this.exportMonth=true
  this.exportMonth1=false
  this.exportRange=false
  this.exportMonth2=false
  
}

exportPdf4(){
  this.exportHours=false
  this.exportDays=false
  this.exportWeek=false
  this.exportMonth=false
  this.exportMonth1=true
  this.exportRange=false
  this.exportMonth2=false
 
}

exportPdf5(){
  this.exportHours=false
  this.exportDays=false
  this.exportWeek=false
  this.exportMonth=false
  this.exportMonth1=false
  this.exportRange=false
  this.exportMonth2=true
  
}

exportPdf6(){
  this.exportHours=false
  this.exportDays=false
  this.exportWeek=false
  this.exportMonth=false
  this.exportMonth1=false
  this.exportMonth2=false
  this.exportRange=true
  
}






}
