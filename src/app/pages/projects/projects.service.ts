import { Injectable } from '@angular/core';

import { Project } from './project';
import { PROJECTS } from './mock-projects';

let projectsPromise = Promise.resolve(PROJECTS);

@Injectable()
export class ProjectsService {
  getProjects() {
    return projectsPromise;
  }
  
  getProject(id: number | string) {
    return projectsPromise
      .then(projects => projects.find(project => project.id === +id));
  }
}
