import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-upload-idendification',
  templateUrl: './upload-idendification.component.html',
  styleUrls: ['./upload-idendification.component.css']
})
export class UploadIdendificationComponent implements OnInit {
  editable:any
  closeResult = '';
  type="dl";
  documentForm!:FormGroup
  type1="select";
  type2="addressProof";
  address: any;
  listDocumnet: any;
  frontSelectedFile!:File;
  backSelectedFile!:File
  data: any;
  imageSrc: string = '';
  reader: any;
  reader1: any;
  fetching: boolean = false;
  message:any
  data1: any;
  constructor(private modalService: NgbModal,public api:AuthService, private formbuilder:FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.getDocument();
    this.userData();
    this.documentForm=this.formbuilder.group({
      documentId:[''],
      frontImage:[''],
      backImage:[''],

    })
  }

  url="../../../assets/Landing page AIDUS/carbon_add-alt.png"
  
  url1="../../../assets/Landing page AIDUS/carbon_add-alt.png"
  fronturl=""
  backurl=""

  userData(){
   
   
    this.api.getUserInfo().subscribe((res:any)=>{
     
        this.data1=res.data.google2FAVerified
      

        console.log("vivek",this.data1)
     
    })
  }
  open(content:any) {
    this.fetching = true;
    const fData=new FormData()
    fData.append("frontImage",this.frontSelectedFile)
    fData.append("backImage",this.backSelectedFile)
    fData.append("documentId",this.documentForm.value.documentId)
    this.api.postDocument(fData).subscribe((res: any) => {
      this.fetching = true;
      this.data=res
      if(this.data="success" ){
        if(!this.data1){
        this.fetching = false;
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
          this.router.navigate(['dashboard'])
        }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
      }
      else{
        Swal.fire({
          // position: 'top-end',
          icon: 'success',
          title: 'Thank you for your submission!',
          text:'We are currently verifying your documents and will have an update on your KYC Status soon!',
          showConfirmButton: false,
          timer: 3000
        })
        this.router.navigate(['dashboard/profile'])
      }
      }
     
      
    
    
      
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
  onFileChange(event:any){
    
    this.frontSelectedFile=event.target.files[0]
    if (event.target.files){
      this.reader= new FileReader();
      this.reader.readAsDataURL(event.target.files[0]);
      this.reader.onload=(e:any)=>{
        this.url=e.target.result;
       
      }
    }
  }
  onFileChange1(event1:any){
    this.backSelectedFile=event1.target.files[0]
    if (event1.target.files){
      this.reader1= new FileReader();
      this.reader1.readAsDataURL(event1.target.files[0]);
      this.reader1.onload=(e1:any)=>{
        this.url1=e1.target.result;
      
      }
    }
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

  getAddressProof(event:any){
    this.address=event.target.value;
    console.log("vive",this.address)
   
  }
  getDocument(){
    this.api.listDocument().subscribe((res:any)=>{
     
        
        this.listDocumnet = res.data;
        console.log("hello",this.listDocumnet)
       
      
  
  
       
    
    })
    
  }
  open1(content1: any) {
        
    this.modalService
      .open(content1, { centered: true })
      .result.then((result) => {
        console.log("Modal closed" + result);
      })
      .catch((res) => {});
  }
 
}
