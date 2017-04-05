import {Component} from '@angular/core';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {

  	myObject = {
  		gender: 'male',
  		age: 33,
  		location: 'USA'
  	}

  	myArr = ['pedro', 'juan', 'diego']

  	myProjects = [{name:'Proyecto 1'}, {name:'Proyecto 2'}, {name:'Proyecto 3'}]

}