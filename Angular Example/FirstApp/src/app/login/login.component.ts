import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  checkLogin()
  {
    if(this.username=="Yash"&& this.password=="lti@123"){
        this.router.navigate(['/clientLink']);
        sessionStorage.setItem("uname",this.username);
    }
    else{
        this.router.navigate(['/LoginLink']);
    }
  }

}
