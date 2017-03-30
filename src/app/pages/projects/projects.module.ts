import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { routing } from './projects.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    ProjectsComponent
  ]
})
export class ProjectsModule {}