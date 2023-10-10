import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent {

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
