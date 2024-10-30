import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.authService.signedUp('login');
  }

  onNewAccount() {
    this.authService.signedUp('signup');
  }

  onHome() {
    this.router.navigate(['home']);
  }
}
