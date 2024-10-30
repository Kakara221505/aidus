import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  addBroker!:FormGroup
  message: any;
  type1: any="eth";
  type2: any="bitcoin";
  type3="usdt";
  type4="aidus";
  ngSelect="eth"
  p="1"
  add="new"
  errormessage: any;
  fetching= false;
  successmessage: any;
  user: any;
  amount:any;
  address:any;
 selectedCoin:string='';
  id: any;
  page: number = 0;
filterObj:any={p:0,limit:15}
count!: number
  copyArr: any;
  earnData1: any;
  coinList: any;
  value: any;
  coinId: any;
  addressList: any;
  
  constructor(private formbuilder:FormBuilder,public api:DashboardService,private router:Router) { }
 
  ngOnInit(): void {

    this.addBroker = this.formbuilder.group({     
     
      coinId: [''],
      amount:[''],
      addressId:['']
      
    
      
    }) 
    // this.getWithdrawDetails(event);
    this. getCoin();
    this. getAddress();
    this.getWithdrawDetails1(event);
    this.getEarnStack();
    console.log("kkkkkk",this.addressList )
    //   email: [''],
    //   password: ['']
    // });
  }


  getCoin(){
    // this.activateRoute.snapshot.params['id']
    this.api.listCoin().subscribe((res:any)=>{
     
        
        this.coinList = res.data;
       
      
  
  
       
    
    })
    
  }
 
  

  getAddress(){
    
    this.api.listAddress().subscribe((res:any)=>{
     
        
      this.addressList = res.data;
   
   console.log("kkkkkk",this.addressList )

     })
  }

  getEarnStack(){
    // this.activateRoute.snapshot.params['id']
    this.api.earnStackData1(this.page).subscribe((res:any)=>{
      if(res){
        
        this.earnData1 = res.data;
        this.copyArr=res.total_records;
       
    
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



  Addwithdraw(){

    this.fetching = true; 
    this.api.addwithdraw(this.addBroker.value).subscribe((res: any) => {
     
      this.fetching = true; 
      this.successmessage=res.message
      this.id=res.data
      console.log(res.data)
      let amount =
      {
        id:this.id,
        wallet_type: this.addBroker.get('coinId')?.value,
        amount: this.addBroker.get('amount')?.value,
        address: this.addBroker.get('addressId')?.value,
      }
    window.localStorage.setItem('amount',JSON.stringify(amount));
     
      console.log("viv",amount)
      this.router.navigate(['dashboard/withdraw-summary'])
      
  },
  error => {
    this.fetching = true; 
    this.handleError(error);
   
  });
  setTimeout(()=> {
    this.fetching = false;
  }, 2000);
  
     
  }

  handleError(error:any) {
    this.message=error.error.message
    console.log("abc",this.message);
  }

  getWithdrawDetails(event:any){
    this.selectedCoin=event.target.value;
    console.log("vivek",this.selectedCoin)

    this.api.getwithdrawDetails(this.selectedCoin).subscribe((res:any)=>{
    this.user = res.data;
   

    }) 
  }

  getWithdrawDetails1(event:any){
    this.api.getwithdrawDetails(this.p).subscribe((res:any)=>{
    this.user = res.data;

    }) 
  }

  addAddress(val:any){
    this.selectedCoin=val.target.value  
    console.log("vivek",this.selectedCoin)

    if(this.selectedCoin=="add"){
      this.router.navigate(['/dashboard/add-address']);
    }
 
  else
  {
    this.router.navigate(['/dashboard/withdraw']);
  }
 

};
}
