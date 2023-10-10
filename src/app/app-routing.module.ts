import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorksComponent } from './components/works/works.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';

const routes: Routes = [
  { path: 'experiences', component: WorksComponent},
  { path: 'about', component: AboutComponent},
  { path: 'skills', component: SkillsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
