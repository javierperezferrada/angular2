import { Component, OnInit } from '@angular/core';
import { Project } from './project';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  providers: [ProjectsService]
})
export class ProjectsComponent { }
