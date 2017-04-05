import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { routing } from './projects.routing';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { NgaModule } from '../../theme/nga.module';



@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule // <-- import the FormsModule before binding with [(ngModel)]
    NgaModule,
  ],
  declarations: [
    ProjectsComponent
  ],
  bootstrap: [ ProjectsComponent ]
})
export class ProjectsModule {}