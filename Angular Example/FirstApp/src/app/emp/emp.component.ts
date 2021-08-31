import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {

  emp:Employee=new Employee(); 
  constructor() { }

  ngOnInit(): void {
  }

  showEmployee(){
    console.log(this.emp);
  }
}
