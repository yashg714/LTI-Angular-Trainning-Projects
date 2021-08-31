import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  name:string="yash";
  num:number=1;
  textValue:any;
  isboolean=true;
  constructor() { }

  ngOnInit(): void {
  }

  sayHello(){
    console.log("hello friends");
  }
  divClicked(){
    console.log("div clicked")
  }
  generate():number{
     return Math.floor(Math.random() * 100) + 1;
  }
  getText(event:any)
  {
    this.textValue=event.target.value;
  }
  enable(){
      this.isboolean=false;
  }
  disable(){
    this.isboolean=true;
}
}
