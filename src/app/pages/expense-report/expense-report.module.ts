import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { routing } from './expense-report.routing';
import { NgaModule } from '../../theme/nga.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ExpenseReportComponent }  from './expense-report.component';

@NgModule({
  imports: [
  	CommonModule,
    routing,
    NgaModule,
    ReactiveFormsModule
  ],
  declarations: [
    ExpenseReportComponent
  ]
})
export class ExpenseReportModule { }