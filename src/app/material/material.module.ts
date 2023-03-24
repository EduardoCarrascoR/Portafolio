import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

const MaterialComponents = [
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatSlideToggleModule 
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialComponents
  ],
  exports: MaterialComponents
})
export class MaterialModule { }
