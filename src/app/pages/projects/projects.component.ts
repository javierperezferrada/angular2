//-----------Extraido desde tutorial Angular2------------------//
import {Component} from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
  ];

// ------------Datos para mis proyectos-------------------------// 
export class Project {
  id: number;
  name: string;
}

const PROJECTS: Project[] = [
  { id: 11, name: 'Colector de aguas susbterraneas' },
  { id: 12, name: 'Generado eolico con energia sinergica' },
  { id: 13, name: 'Nombre de un Proyecto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
  ];

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  //En esta clase se declaran las variables para Proyectos
  title = 'Mis Proyectos';
  //-----------Extraido desde tutorial Angular2------------------//
  
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  heroes = HEROES;
  selectedHero: Hero;
  //onSelect(hero: Hero): void {
  //  this.selectedHero = hero;
  //}

  // ------------Datos para mis proyectos-------------------------//         
  projects = PROJECTS;
  selectedProject: Project;
  onSelect(project: Project): void {
    this.selectedProject = project;
  }


}