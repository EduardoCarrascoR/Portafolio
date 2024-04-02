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
      description: "Un proyecto que consiste en un cifrador simple con apariencia de gato",
      img: "../assets/icon/WebApp.png",
      languages: "HTML, CSS3, Typesript y JavaScript"},
    { name: "AngeloBot",
      description: "Bot Angeloh publica memes en el canal discord, este bot es una parodia de un amigo.",
      img: "../assets/icon/WebApp3.png",
      languages: "JavaScript"},
    { name: "Encriptador de texto",
      description: "",
      img: "../assets/icon/WebApp4.png",
      languages: "HTML, CSS3 y JavaScript"},
    { name: "Desafio Alura",
      description: "",
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
