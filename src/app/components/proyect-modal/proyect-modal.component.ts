import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Proyect } from 'src/app/interfaces/proyect';

@Component({
  selector: 'app-proyect-modal',
  templateUrl: './proyect-modal.component.html',
  styleUrls: ['./proyect-modal.component.css']
})
export class ProyectModalComponent {
  images = [
    {
      'id': 0,
      'name': 'deco',
      'src': 'assets/img/decod_print.png'
    },
    {
      'id': 1,
      'name': 'forca',
      'src': 'assets/img/forca_print.png'
    },
    {
      'id': 2,
      'name': 'forca2',
      'src': 'assets/img/forca2_print.png'
    },
  ];

  constructor(
    public dialogRef: MatDialogRef<ProyectModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Proyect,
  ) {}

  ProyectOptions: OwlOptions = {
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

  onNoClick(): void {
    this.dialogRef.close();
  }
}
