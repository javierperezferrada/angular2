import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { ProjectDetailComponent } from './project-detail.component';
import { routing } from '../projects.routing';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { NgaModule } from '../../theme/nga.module'; // para estilo
import { BrowserModule }  from '@angular/platform-browser';




@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    routing,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    NgaModule // para estilo
  ],
  declarations: [
    ProjectDetailComponent
  ],
  bootstrap: [ ProjectDetailComponent ]
})
export class ProjectDetailModule {}
