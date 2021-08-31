import { Component } from "@angular/core";

@Component({
  selector:'app-test',
  template:`<div>This test INLINE page </div>
            <H1>Hello {{name}}</H1>
            <input type="Text" value={{name}}>
            <h2>{{'First Name: '+fname+' Last name :'+lname}}</h2>
            <div>{{num1*num2}}</div> 
            <div>Addition by function {{add()}}</div> 
            <img src="{{imagePath}}" alt="image not supported">`,
  styles:[``]
})
export class TestComponent{
    name:string="Yash";
    num1=25;
    num2=40;
    fname:String="Yash";
    lname:string="Gupta";
    imagePath="./assets/images/ceo.jpg"
    constructor(){
      this.name="Yash";
    }

    add():number{
      return this.num1+this.num2;
    }
}