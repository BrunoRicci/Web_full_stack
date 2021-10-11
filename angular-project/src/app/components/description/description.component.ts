import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
  providers: [ProjectService]
})
export class DescriptionComponent implements OnInit {
  public project;   //Deleted type because API object "_id" attibute is not equal to this model's "id" one.
  public url:string;
  public confirm:boolean;
  constructor(
    private _projectService:ProjectService,
    private _router:Router,
    private _route:ActivatedRoute
    ){
      this.url=global.url;
      this.confirm = false;
    }
    
  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      let id = params.id;
      console.log('project_initial:',this.project);
      this.getProject(id);

    })
  }

  getProject(id){
    this._projectService.getProject(id).subscribe(
      response => {
        console.log(response.project);
        if(response.project){
          this.project = response.project;
          console.log('project:',this.project);
        }
      },
      error => {
        console.log(<any>error)
      }
    );
  }
 
  deleteProject(id){
    console.log('deleted:', id);
    
    this._projectService.deleteProject(id).subscribe(
      response => {
        // console.log(response);
        if(response.project){
          this.project = response.project;
          this._router.navigate(['/projects']);   //Return to projects page
        }
      },
      error => {
        console.log(<any>error)
      }
    );

  }
  

}
