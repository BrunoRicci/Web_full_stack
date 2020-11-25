import { Component, OnInit } from '@angular/core';
import { ContactUser } from "../models/contact.user";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  public user:ContactUser;
  constructor(){
    this.user = new ContactUser('',
                                '',
                                '',
                                '');
  }

  ngOnInit(): void {
    
  }

  onSubmit(form){
    // console.log(this.user);
    console.log(form);
    
  }
}
