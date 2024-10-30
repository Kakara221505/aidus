import { Component, OnInit } from '@angular/core';
import { faFacebookSquare, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  linkedIn = faLinkedinIn;
  instagram = faInstagram;
  twitter = faTwitter;
  facebook = faFacebookSquare;

  constructor() { }

  ngOnInit(): void {
  }

}
