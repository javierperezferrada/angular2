import { Routes, RouterModule }  from '@angular/router';
import { ProjectsComponent } from './projects.component';


// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent
   }
];

export const routing = RouterModule.forChild(routes);
