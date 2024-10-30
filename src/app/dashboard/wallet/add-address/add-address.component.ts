import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {
  addAddress!:FormGroup
  fetching= false;
  messageemail: any;
  body: any;
  coinId:any;
  ngSelect="ETH/USDT/AIDUS"
  coinList: any;
  addresName:any;
  address:any;
  message: any;
  id: any;
  constructor(public api:DashboardService,private activateRoute:ActivatedRoute,private formbuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {

    this.addAddress = this.formbuilder.group({     
     
      addresName: [''],
      address:[''],
    
      
    }) 
    this. getCoin();

  }

  AddAddress(){
    this.fetching = true; 
    this.api.addAddress(this.addAddress.value).subscribe((res: any) => {
      this.fetching = true; 
      this.id=res.data
      console.log(res.data)
      let whiteListId =
      {
        id:this.id,
        address: this.addAddress.get('address')?.value,
      }
    window.localStorage.setItem('whiteListId',JSON.stringify(whiteListId));
     
      console.log("viv",whiteListId)
      // this.successmessage=res.message
      // console.log(this.successmessage)
      this.router.navigateByUrl('/dashboard/add-verification')
  },
  error => {
    this.fetching = true; 
    this.handleError(error);
   
  }
  );
  setTimeout(()=> {
    this.fetching = false;
  }, 2000);
    this.fetching = false;
     
  }

  handleError(error:any) {
    this.message=error.error.message
    
  }

  getCoin(){
    // this.activateRoute.snapshot.params['id']
    this.api.listCoin().subscribe((res:any)=>{
     
        
        this.coinList = res.data;
       
      
  
  
       
    
    })
    
  }

}
