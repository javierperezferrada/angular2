import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  providers: [ProjectsService]
})
export class ProjectListComponent implements OnInit {
  projects: Project[];
  selectedProject: Project;

  constructor(private projectsService: ProjectsService) { }

  getProjects(): void {
    this.projectsService.getProjects().then(projects => this.projects = projects);
  }

  ngOnInit(): void {
    this.getProjects();
  }

  onSelect(project: Project): void {
    this.selectedProject = project;
  }
}
