import { Component, ElementRef, HostListener, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OwlOptions } from "ngx-owl-carousel-o";
import { ProyectModalComponent } from './components/proyect-modal/proyect-modal.component';
import { Proyect } from './interfaces/proyect';

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
  hobbies = [
    {
      'id': '0',
      'name': 'Series',
      'src': 'tv_gen'
    },
    {
      'id': '1',
      'name': 'Juegos',
      'src': 'sports_esports'
    },
    {
      'id': '2',
      'name': 'Dibujar',
      'src': 'edit'
    },
    {
      'id': '2',
      'name': 'Dibujar',
      'src': 'edit'
    },
  ];
  proyects: Proyect[] = [
    { name: "fibonachi",
      img: "../assets/icon/WebApp.png",
      languages: "Javascript"},
    { name: "Encriptador de texto",
      img: "../assets/icon/WebApp3.png",
      languages: "HTML, CSS3 y JavaScript"},
    { name: "Encriptador de texto",
      img: "../assets/icon/WebApp4.png",
      languages: "HTML, CSS3 y JavaScript"},
    { name: "Desafio Alura",
      img: "../assets/icon/WebApp2.png",
      languages: "HTML y JavaScript"}
  ];
  title = 'Portafolio';
  rotation: any;
  element: boolean = false;
  isSticky: boolean = false;
  menuActive:  boolean = true;
  burgerActive:  boolean = false;
  menuUnactive:  boolean = true;

  isMenuOpen: boolean = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 0.5;
  }
  @Input() data: string[] = [];
  @Input() trigger = "Trigger";
  @Input() isRootNode = false;

  constructor(private dialog: MatDialog) {}

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
  
  openProyectModal(data: any): void{
    const dialogRef = this.dialog.open(ProyectModalComponent, {
      data,
      width: '60%',
      height: '50%'
    });
  }

  onSidenavClick(): void {
    this.isMenuOpen = false;
    this.menuActive = !this.menuActive;
    this.burgerActive = !this.burgerActive;
    this.menuUnactive = !this.menuUnactive;

  }
}