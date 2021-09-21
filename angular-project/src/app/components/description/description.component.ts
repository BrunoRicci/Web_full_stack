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
  public project:Project;
  public url:string;

  constructor(
    private _projectService:ProjectService,
    private _router:Router,
    private _route:ActivatedRoute
    ){
      this.url=global.url;
    }
    
  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      let id = params.id;
      this.getProject(id);
    })
  }


  getProject(id){
    this._projectService.getProject(id).subscribe(
      response => {
        console.log(response);
        if(response.project){
          this.project = response.project;
        }
      },
      error => {
        console.log(<any>error)
      }
    );
  }

  updateProject(){
    
  }
  
  
  deleteProject(id:string){
    console.log('deleted:', id);
    
    this._projectService.deleteProject(id).subscribe(
      response => {
        console.log(response);
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
