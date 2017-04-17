import { Component } from '@angular/core';
import { FormBuilder, AbstractControl, FormGroup, Validators } from '@angular/forms';
import { ExpenseReportService } from './expense-report.service'


import 'style-loader!../../theme/components/baContentTop/baContentTop.scss';

@Component({
  selector: 'expense-report',
  templateUrl: './expense-report.component.html',
  providers: [ExpenseReportService]
})

export class ExpenseReportComponent {
  expensiveForm: FormGroup;
  public name:AbstractControl;
  public description:AbstractControl;
  public submitted:boolean = false;

  constructor(private fb: FormBuilder, private expenseReportService:ExpenseReportService) {
    this.createForm();
    this.name = this.expensiveForm.controls['name'];
    this.description = this.expensiveForm.controls['description'];
    this.loadExpense();
  }
  loadExpense(){
    this.expenseReportService.getExpense().subscribe(res =>{
      alert(res._body);
    })
  }
  createForm() {
    this.expensiveForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(4)]) ], // <--- the FormControl called "name"
      description: ['', Validators.compose([Validators.required, Validators.minLength(4)]) ],
    });
  }
  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.expensiveForm.valid) {
      // your code goes here
      console.log(values);
      this.expenseReportService.add({name:values.name, description:values.description}).subscribe(res =>{
        alert(res);
      })
    }
  }
}
