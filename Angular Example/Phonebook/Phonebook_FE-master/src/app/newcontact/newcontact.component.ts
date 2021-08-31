import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contacts } from "../contact";
import { ContactService } from '../contact.service';


@Component({
  selector: 'app-newcontact',
  templateUrl: './newcontact.component.html',
  styleUrls: ['./newcontact.component.css']
})
export class NewcontactComponent implements OnInit {
  
  contact:Contacts = new Contacts();
  constructor(private router:Router,private ct:ContactService) { }
  
  ngOnInit(): void {
  }
  
  addcontact(){
    this.ct.createContact(this.contact).subscribe(
      data=>{
        this.contact = data;
        console.log(data);
        this.router.navigate(['/homeLink']);
      }
    );
    alert("Contact Added Successfully");
    this.router.navigate(['/addContactLink'])
  }
  
}
