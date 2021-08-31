import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  template: `
  <!-- <img src="{{imagePath}}" >-->
  <h1>Property Binding</h1>
  <img [src]='imagePath' height="200px" withd="200px"><br>
  <button [disabled]='isDisabled'>click</button>
  <div>{{data}}</div>
  <div innerHTML={{data}}></div>
  <div [innerHTML]=data></div>
  `,
  styles: [
  ]
})
export class SampleComponent  {

  imagePath="./assets/images/ceo.jpg"
  isDisabled:boolean=true;
  data:string="<h2>Employee Data</h2>"
}
