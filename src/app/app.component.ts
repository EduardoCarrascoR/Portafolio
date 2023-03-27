import { BooleanInput } from '@angular/cdk/coercion';
import { Component, HostListener, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { MatMenu, MatMenuTrigger, MenuPositionX } from '@angular/material/menu';
import { take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Portafolio';
  rotation: any;
  element: boolean = false;


  isSticky: boolean = false;
  menuActive:  boolean = false;
  menuUnactive:  boolean = true;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 0.5;
  }

  rotate(){
    return 
  }

  @Input() data: string[] = [];
  @Input() trigger = "Trigger";
  @Input() isRootNode = false;
  

  showData() {
    console.log("alli esta")
    this.menuActive = true;
    this.menuUnactive = false;
    return (this.element = true);
  }
  
  hideData() {
    this.menuActive = false;
    this.menuUnactive = true;
    return (this.element = false);
  }
}
