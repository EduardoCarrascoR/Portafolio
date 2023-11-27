import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Proyect } from 'src/app/interfaces/proyect';
import { ProyectModalComponent } from '../proyect-modal/proyect-modal.component';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent {

  proyects: Proyect[] = [
    { name: "CatEncrypter",
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

  constructor(private dialog: MatDialog) {}

  openProyectModal(data: any): void{
    const dialogRef = this.dialog.open(ProyectModalComponent, {
      data,
      width: '60%',
      height: '50%'
    });
  }
}
