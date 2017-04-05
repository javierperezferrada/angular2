import { Routes, RouterModule }  from '@angular/router';
import { ExpenseReportComponent } from './expense-report.component';

const routes: Routes = [
  {
    path: '',
    component: ExpenseReportComponent
  }
];

export const routing = RouterModule.forChild(routes);