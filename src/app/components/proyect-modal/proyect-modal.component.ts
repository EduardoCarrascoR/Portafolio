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
      'id': '0',
      'name': 'deco',
      'src': 'assets/img/decod_print.png'
    },
    {
      'id': '1',
      'name': 'forca',
      'src': 'assets/img/forca_print.png'
    },
    {
      'id': '2',
      'name': 'forca2',
      'src': 'assets/img/forca2_print.png'
    },
    {
      'id': 'CatEncrypter1',
      'name': 'CatEncrypter1',
      'src': 'assets/img/CatEncrypter1-1.png'
    },
    {
      'id': 'CatEncrypter2',
      'name': 'CatEncrypter2',
      'src': 'assets/img/CatEncrypter1-2.png'
    },
    {
      'id': 'CatEncrypter3',
      'name': 'CatEncrypter3',
      'src': 'assets/img/CatEncrypter1-3.png'
    },
    {
      'id': 'AngeloBot1',
      'name': 'AngeloBot1',
      'src': 'assets/img/AngeloBot-1.png'
    },
    {
      'id': 'AngeloBot2',
      'name': 'AngeloBot2',
      'src': 'assets/img/AngeloBot-2.png'
    },
    {
      'id': 'AngeloBot3',
      'name': 'AngeloBot3',
      'src': 'assets/img/AngeloBot-3.png'
    },
    {
      'id': 'AngeloBot4',
      'name': 'AngeloBot4',
      'src': 'assets/img/AngeloBot-4.png'
    },
    
  ];

  proyectImages: any[] = [];

  constructor(
    public dialogRef: MatDialogRef<ProyectModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Proyect,
  ) {
    this.imagesdata(data)
  }

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

  imagesdata(data: any) {
    const id = data.name;
    for (let index = 1; index < 6; index++) {
      let aux = this.images.find((image) => image.id == id + index)     
      if(aux === undefined) continue
      else {this.proyectImages.push(aux)} 
    }
  }
}
