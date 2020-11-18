import { Component, OnInit, DoCheck, OnDestroy} from '@angular/core';
import { configuration } from '../models/configuration';

@Component({
  selector: 'app-myconsole-comp',
  templateUrl: './myconsole-comp.component.html',
  styleUrls: ['./myconsole-comp.component.css']
})
export class MyconsoleCompComponent implements OnInit, DoCheck, OnDestroy{
  public backgroundcolor:string; 
  public title:string; 
  public description:string;

  constructor() {
    this.backgroundcolor = configuration.background_color;
    this.title = configuration.title;
    this.description = configuration.description;
  }

  ngOnInit(): void {  //Executed when the component is created.
    console.log('OnInit executed');
    
  }

  ngDoCheck():void{   //Executed when the component is updated.
    console.log('DoCheck executed');
    
  }

  ngOnDestroy():void{ //Executed when the component is destroyed.
    console.log('Component destroyed');
    
  }

  

}
