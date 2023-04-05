import { Component, HostListener, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { OwlOptions } from "ngx-owl-carousel-o";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  skills = [{
      'id': '0',
      'name': 'HTML',
      'src': 'assets/icon/HTML5.svg'
    },
    {
      'id': '1',
      'name': 'Javascript',
      'src': 'assets/icon/JS.svg'
    },
    {
      'id': '2',
      'name': 'NodeJs',
      'src': 'assets/icon/node.svg'
    },
    {
      'id': '3',
      'name': 'Css',
      'src': 'assets/icon/CSS3.svg'
    },
    {
      'id': '4',
      'name': 'TypeScript',
      'src': 'assets/icon/TypeScript.svg'
    },
    {
      'id': '5',
      'name': 'Angular',
      'src': 'assets/icon/Angular.svg'
    },
    {
      'id': '6',
      'name': 'NestJs',
      'src': 'assets/icon/NestJs.svg'
    },
  ];
  hobbies = [{
      'id': '0',
      'name': 'Tocar bajo',
      'src': 'assets/icon/guitar_icon.png'
    },
    {
      'id': '1',
      'name': 'Oir música',
      'src': 'assets/icon/headphones_icon.png'
    },
    {
      'id': '2',
      'name': 'Ver séries',
      'src': 'assets/icon/tv_icon.png'
    },
    {
      'id': '3',
      'name': 'Cocinar',
      'src': 'assets/icon/forkspoon_icon.png'
    },
    {
      'id': '4',
      'name': 'Tomar fotos',
      'src': 'assets/icon/camera_icon.png'
    },
  ];
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
  @Input() data: string[] = [];
  @Input() trigger = "Trigger";
  @Input() isRootNode = false;

  constructor() {}

  ngOnInit(): void {
      
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<span class="material-icons material-symbols-outlined">chevron_left</span>', '<span class="material-icons material-symbols-outlined">chevron_right</span>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

  rotate(){
    return 
  }


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
