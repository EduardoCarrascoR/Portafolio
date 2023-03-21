import { Component, HostListener, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Portafolio';
  rotation: any;


  isSticky: boolean = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 0.5;
  }

  rotate(){
    return 
  }

}
