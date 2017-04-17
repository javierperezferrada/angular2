// Keep the Input import for now, you'll remove it later:
import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { ProjectsService } from '../projects.service';
import { Project } from '../project';

import 'style-loader!../../../theme/components/baContentTop/baContentTop.scss';

@Component({
  selector: 'project-detail',
  templateUrl: './project-detail.component.html',
  providers: [ProjectsService]
})
export class ProjectDetailComponent implements OnInit {
  project: Project;
  constructor(
    private projectsService: ProjectsService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.projectsService.getProject(params['id']))
      //.subscribe(project => this.project = project);
      .subscribe(res => {
        console.log(res);
        if(res.status === 200){
          var project = JSON.parse(res._body);
          console.log(project);
          this.project = project;
          //console.log(JSON.parse(localStorage.getItem("currentUser")));
        }
      });
    //console.log("debug");
  }

}
