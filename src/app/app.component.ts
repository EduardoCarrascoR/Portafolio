import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Proyect } from './interfaces/proyect';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  academics = [
    {
      title: 'Análisis de datos',
      img: 'assets/img/ufpr_logo.png',
    },
    {
      title: 'Formación en UX Design',
      img: 'assets/img/alura_logo.png',
    },
    {
      title: 'Posgrado en diseño',
      img: 'assets/img/ufrj_logo.png',
    },
  ]
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
  @Input() about = false;
  @Input() experiences = true;
  @Input() skills = false;

  

  ngOnInit(): void {
      
  }
  
  clickInSideNav(event: any): void {
    const id = event.currentTarget.id
    switch (id) {
      case 'about':
        this.about = true;
        this.skills = false;
        this.experiences = false;
        break;

      case 'skills':
        this.skills = true;
        this.experiences = false;
        this.about = false;
        break;
        
      case 'experiences':
        this.experiences = true;
        this.about = false;
        this.skills = false;
        break;
    }
    this.menuUnactive = !this.menuUnactive; 
    this.burgerActive = !this.burgerActive;
    this.menuActive = !this.menuActive;
  }

  onSidenavClick(): void {
    this.isMenuOpen = false;
    this.menuActive = !this.menuActive;
    this.burgerActive = !this.burgerActive;
    this.menuUnactive = !this.menuUnactive;

  }
}