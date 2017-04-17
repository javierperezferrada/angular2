import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectsService } from '../projects.service';
import { routing } from '../projects.routing';
import {Router} from '@angular/router'

import {ProjectsService} from '../projects.service';

import 'style-loader!./project-list.scss';
import 'style-loader!../../../theme/components/baContentTop/baContentTop.scss';

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  providers: [ProjectsService]
})
export class ProjectListComponent implements OnInit {
  projects: Project[];
  selectedProject: Project; 

  constructor(private router:Router, private projectsService:ProjectsService) { 
    try{
      console.log(JSON.parse(localStorage.getItem("currentUser")));
      var currentUser = JSON.parse(localStorage.getItem('currentUser'));
      var token = currentUser.token; // your token
    }catch(Error){
      //console.log(Error.message);
      this.router.navigate(['login']);
    }
    
    
  }

  getProjects(): void {
    //this.projectsService.getProjects().then(projects => this.projects = projects);
    this.projectsService.getProjects().subscribe(res => {
      //console.log(res);
      if(res.status === 200){
        var projects = JSON.parse(res._body).docs;
        //console.log(projects);
        this.projects = projects;
        //console.log(JSON.parse(localStorage.getItem("currentUser")));
      }
    });
  }

  ngOnInit(): void {
    this.getProjects();
  }

  onSelect(project: Project): void {
    this.selectedProject = project;
  }
}
