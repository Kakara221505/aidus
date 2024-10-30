import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from 'src/app/dashboard/dashboard.service';

@Component({
  selector: 'app-tagline',
  templateUrl: './tagline.component.html',
  styleUrls: ['./tagline.component.css']
})
export class TaglineComponent implements OnInit {

  addBroker!:FormGroup
  data: any;
  constructor(private formbuilder:FormBuilder,public api:DashboardService) { }

  ngOnInit(): void {
    this.addBroker = this.formbuilder.group({     
     
      name: ['',Validators.required],
      email:['',[Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]
    
      
    }) 
  }

  get f(){
    return this.addBroker.controls
  }

  submit(){
    this.api.newsData(this.addBroker.value).subscribe((res: any) => {
      this.data=res.message
      console.log("viv",this.data)
  } );
  }
}
