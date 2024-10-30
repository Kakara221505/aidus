import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/auth/auth.service';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  fetching= false;
  data: any;
  addressList: any;
  data1: any;
  message: any;
  closeResult: any;
  rejectionId: any;
  documentId: any;
  dataRejection: any;
  constructor(private router:Router,private modalService: NgbModal,public api:AuthService,public api1:DashboardService, ) { }

  ngOnInit(): void {
    this.userData();
    this. getAddress()
    
  }

  userData(){
   
   
    this.api.getUserInfo().subscribe((res:any)=>{
     
        this.data=res.data
        this.rejectionId=res.data.documentRejectionId
       
        localStorage.setItem('documnetId', this.rejectionId)
        this.documentId=localStorage.getItem('documnetId')

       
     
    })
  }
   
  

  getAddress(){
    
    this.api1.listAddress().subscribe((res:any)=>{
     
        
      this.addressList = res.data;
   
   console.log("kkkkkk",this.addressList )

     })
  }
  logout(){
    this.fetching = true; 
    window.sessionStorage.removeItem('user')
    window.sessionStorage.clear()
   localStorage.clear();
    this.fetching = true; 
    this.router.navigate(['/auth/login'])
  }


  open(content:any) {
    this.fetching = true;
    const fData=new FormData()
    
    this.api1.rejectionReason(this.documentId).subscribe((res: any) => {
      this.fetching = true;
      this.dataRejection=res.data.reason
     
      console.log("vivek",this.dataRejection)
        this.fetching = false;
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
          this.router.navigate(['auth/personal-information'])
        }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    
    
      
     
      
    
    
      
  }, 
  error => {
    this.handleError(error);
    
  } );

  setTimeout(()=> {
    this.fetching = false;
  }, 2000);
 

 
  }
   handleError(error:any) {
    this.fetching = false;
    this.message=error.error.status
    console.log("abc",this.message);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }



}
