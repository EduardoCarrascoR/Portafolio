import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProyectModalComponent } from './components/proyect-modal/proyect-modal.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { WorksComponent } from './components/works/works.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';

@NgModule({
  declarations: [
    AppComponent,
    ProyectModalComponent,
    AboutComponent,
    SkillsComponent,
    ContactComponent,
    WorksComponent,
    HobbiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
