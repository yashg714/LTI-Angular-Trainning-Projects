import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  num1:number=0;
  num2:number=0;
  result:number=0;
  constructor() { }

  ngOnInit(): void {
  }
  cal(num:number)
  {
    if(num==1)
    this.result= this.num1+this.num2;
  if(num==2)
    this.result= this.num1-this.num2;
  if(num==3)
    this.result= this.num1*this.num2;
  if(num==4)
    this.result= this.num1/this.num2;
  if(num==5)
    this.result= this.num1%this.num2;
  }
}
