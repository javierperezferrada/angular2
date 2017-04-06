import { Routes, RouterModule }  from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ModuleWithProviders } from '@angular/core';


// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent
   }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
