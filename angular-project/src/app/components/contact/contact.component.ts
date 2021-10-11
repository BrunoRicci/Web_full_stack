import { Component, OnInit, ViewChild } from '@angular/core';
import { AnonymousSubject } from 'rxjs/internal/Subject';
// import { $ } from '../../../../node_modules/jquery/dist/jquery.min.js';
// import { $ } from 'jquery';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public sliderWidth:number;
  public childValues:any;

  @ViewChild('texts') component_texts:any;


  constructor() { }

  ngOnInit(): void {

    

    console.log('contact section');
    
    $('#menu_bar').css("background", "green");
  }

  getValues(val){
    console.log('received values', val);
    console.log('viewchild values: ', this.component_texts);
    

    this.childValues = val;
  }

}
