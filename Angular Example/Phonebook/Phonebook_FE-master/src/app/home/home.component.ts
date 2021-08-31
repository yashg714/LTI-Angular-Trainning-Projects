import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contacts } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   
  contact:Contacts[] = [];
  name:string;

  constructor(private router:Router,private ct:ContactService) {
   }

  ngOnInit(): void {
    this.ct.viewAllContacts().subscribe(
      data=>{
        this.contact = data;
        console.log(data);
      }
    );
  }
   
  addContact(){
    this.router.navigate(['/addContactLink']);
  }

  delContact(contactId){
    console.log(contactId);
    this.ct.deleteContact(contactId).subscribe(
      data=>{
          console.log(contactId)
      }
    );
    window.location.reload();
    
  }

  search(name){
    this.ct.searchContact(name).subscribe(
      data=>{
        console.log(name);
        this.contact = data;

      }
    );

  }

}
