import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { routing } from './expense-report.routing';

import { ExpenseReportComponent }  from './expense-report.component';

@NgModule({
  imports: [
  	CommonModule,
    routing
  ],
  declarations: [
    ExpenseReportComponent
  ]
})
export class ExpenseReportModule { }