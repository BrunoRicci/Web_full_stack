import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { global } from '../../services/global';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {
  public projects:Project[];
  public url:string;

  constructor(
    private _projectService:ProjectService
  ){}

  ngOnInit(): void {
    this.url=global.url;
    this.getProjects();
  }

  getProjects(){
    this._projectService.getProjects().subscribe(
      response => {
        console.log(response);
        if(response.project){
          this.projects = response.project;
        }
      },
      error => {
        console.log(<any>error)
      }
    );
  }

}
