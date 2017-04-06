import { Injectable } from '@angular/core';

import { Project } from './project';
import { PROJECTS } from './mock-projects';

@Injectable()
export class ProjectsService {
	getProjects(): Promise<Project[]> {
		return Promise.resolve(PROJECTS);
	} 
}