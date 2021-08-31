import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';

@Component({
  selector: 'app-struct',
  template: `
  <h1>*NGIF demo</h1><br>   
  <div *ngIf="showDiv">
    This is div1.
    </div>
    <button (click)="toggleDiv()">Show/hide</button>
    <br>
    <h1>*NGIF ELSE demo</h1> 
    <br>
    <div *ngIf="showDiv2" else #elseblock>This is div2. </div>
    <ng-template #elseblock>
    <div>This is div2. </div>
    </ng-template>
    <input type="radio" name="rad" (click)="showHideDiv2(true)">Show Div2
    <input type="radio" name="rad" (click)="showHideDiv2(false)">Hide Div2
    <div *ngFor="let nm of names">
    {{nm}}
    </div>  
    <br><br>
    <table border="1">
    <thead>
        <th>Employee ID</th>
        <th>Employee Name</th>
        <th>Designation</th>
        <th>Salary</th>
        <th>isFirst</th>
        <th>isLast</th>
        <th>isEven</th>
        <th>isOdd</th>
    </thead>
    <tbody>
      <tr *ngFor="let e of employees;let isFirst=first;let isLast=last;let isEven=even;let isOdd=odd">
        <td>{{e.empId}}</td>
        <td>{{e.empName |titlecase}}</td>
        <td>{{e.empDesig| uppercase}}</td>
        <td>{{e.empSalary|currency:'INR':true}}</td>
        <td>{{isFirst}}</td>
        <td>{{isLast}}</td>
        <td>{{isEven}}</td>
        <td>{{isOdd}}</td>
        </tr>
    </tbody>
</table>
<h2>Date</h2>
<div>{{today|date}} </div>
<div>{{today|date:'fullDate'}} </div>
<div>{{today|date:'dd/MM/YYYY'}} </div>
 `,
  styles: [
  ]
})
export class StructComponent implements OnInit {

  showDiv:boolean=true;
  showDiv2:boolean=true;
  names:string[]=["john","Mark","kevin","steve","David"];
  today:number=Date.now();
  employees:Employee[]=[
    {
      empId:1001,empName:"john",empDesig:"Programmer",empSalary:3000
    },
    {
      empId:1002,empName:"Mark",empDesig:"Programmer",empSalary:2000
    },
    {
      empId:1003,empName:"Kevin",empDesig:"Programmer",empSalary:5000
    },
    {
      empId:1004,empName:"Steve",empDesig:"Manager",empSalary:8000
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  toggleDiv(){
    this.showDiv=!this.showDiv;
  }
  showHideDiv2(flag:boolean)
  {
    this.showDiv2=flag;
  }
}
