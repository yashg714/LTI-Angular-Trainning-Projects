import { HttpClient } from '@angular/common/http';
import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacts } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpclient:HttpClient) { }

  viewAllContacts():Observable<Contacts[]>{
   return this.httpclient.get<Contacts[]>("http://localhost:9090/viewAllContacts");
  }

  createContact(contact:Contacts):Observable<Contacts>{
    return this.httpclient.post<Contacts>("http://localhost:9090/createContact",contact);
  }

  deleteContact(contactId:number):Observable<any>{
   return this.httpclient.post<any>("http://localhost:9090/deleteContact",contactId);
  }

  searchContact(name:string):Observable<Contacts[]>{
    return this.httpclient.get<Contacts[]>("http://localhost:9090/searchContact?firstName="+name);
  }

}
