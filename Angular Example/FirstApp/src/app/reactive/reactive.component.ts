import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})

export class ReactiveComponent implements OnInit {

  loginForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      email:new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      pwd:new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)])
    })

  }

  submitLogin(form:FormGroup){
    console.log("Is Form Valid ",form.valid);
    console.log("Email: ",form.value.email);
    console.log("Password: ",form.value.pwd);
    
    
    
  }

}
