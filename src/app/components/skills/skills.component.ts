import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
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
}
