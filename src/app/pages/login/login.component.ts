import {Component} from '@angular/core';
import {Router} from '@angular/router'
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';

import {AuthService} from '../../../shared/services/auth.service';

import 'style-loader!./login.scss';

@Component({
  selector: 'login',
  templateUrl: './login.html',
})
export class Login {

  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;
  public error:boolean=false;
  public errorMessage:string='';

  constructor(fb:FormBuilder, private auth:AuthService, private router:Router) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
      // console.log(values);
      this.auth.login({email:values.email, password:values.password}).subscribe(res => {
        console.log(res);
        if(res.status === 200){
          //here save the token in LocalStorage
          console.log("user: %s",values.email);
          console.log("token: %s",res._body);
          localStorage.setItem("currentUser", JSON.stringify({ token: JSON.parse(res._body).token, name: JSON.parse(res._body).userId }));
          this.router.navigate(['pages']);
          //console.log(JSON.parse(localStorage.getItem("currentUser")));
        }
      }, err => {
        //do something with error
        this.error = true;
        this.errorMessage = err.json().message;
      });
    }
    }
  }
