import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Register } from '../register';

@Component({
  selector: 'app-tdf-demo',
  templateUrl: './tdfdemo.component.html',
  styleUrls: ['./tdfdemo.component.css']
})
export class TdfDemoComponent implements OnInit {

  reg:Register=new Register();
  constructor() {
    this.reg.userName="Yash";
    this.reg.userPassword="Yash@123"
    this.reg.userEmail="yash.gupta@lti.com"
    this.reg.userPhone="9876543210"
   }

  ngOnInit(): void {
    console.log(JSON.stringify(this.reg));
    
  }
  // registerUser()
  // {
  //   console.log(JSON.stringify(this.reg));
  // }
  registerUser(regForm:NgForm){
    console.log(JSON.stringify(regForm.value));
    
  }
}
