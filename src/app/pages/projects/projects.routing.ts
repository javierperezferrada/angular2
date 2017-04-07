import { Routes, RouterModule }  from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ModuleWithProviders } from '@angular/core';
import { ProjectListComponent } from './project-list/project-list.component';


// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent
   },
  { path: 'list', component: ProjectListComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
