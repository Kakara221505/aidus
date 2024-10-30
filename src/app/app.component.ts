import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AIDUS';

  onActivate(e:any, outlet:any){
    outlet.scrollTop = 0;
  }
}
