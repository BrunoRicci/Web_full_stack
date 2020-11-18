import {Component} from '@angular/core';

@Component({
    selector: 'mycomponent',
    templateUrl: './mycomponent.component.html' //Gets template to insert into app.component label "mycomponent"
})
export class MyComponentComponent {
    
    public title:string;
    public elements:string[];

    constructor(){
        console.log('MyComponentComponent component created.');
        this.title = 'Test app!';
        this.elements = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
    }
    
}