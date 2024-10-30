import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-reset-pw',
  templateUrl: './reset-pw.component.html',
  styleUrls: ['./reset-pw.component.css']
})
export class ResetPwComponent implements OnInit {
  show: boolean = false;
  message: any;
  token: any;
  constructor(private authService: AuthService,private router: Router,private activateRoute:ActivatedRoute,) { }

  ngOnInit(): void {
    this.token=this.activateRoute.snapshot.params['id']
    console.log("vivek",this.token)
  }


  reset(form: NgForm) {
    this.authService.resetPw(form.value.password,this.token).subscribe(
        res => {
          Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Congratulations!',
          text:'Password reset successfully',
          showConfirmButton: false,
          timer: 8000
        })
          this.router.navigate(['auth/login']);
        },
        error=> {
          this.handleError(error);
          this.message=error.error.message
          // this.router.navigate(['auth/login']);
        });
    }
  
  
  handleError(error:any) {
    this.message=error.error.message
    console.log("abc",this.message);
  
  }

  

  showPassword() {
    this.show = !this.show;
  }
}
