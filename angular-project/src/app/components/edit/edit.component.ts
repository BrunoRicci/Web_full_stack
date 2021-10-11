import { Component, OnInit } from '@angular/core';
import { Project } from "../../models/project";
import { ProjectService } from "../../services/project.service";
import { global } from "../../services/global";
import { UploadService } from "../../services/upload.service";
import { Router, ActivatedRoute, Params } from '@angular/router'


@Component({
  selector: 'app-edit',
  // templateUrl: '../create/create.component.html',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadService]
})
export class EditComponent implements OnInit {

  public title:string;
  public project;
  public status:string;
  public checklink:string;
  public filesToUpload:Array<File>;
  public url:string;

  constructor(
    private _projectService:ProjectService,
    private _uploadService: UploadService,
    private _router:Router,
    private _route:ActivatedRoute
  ){
    this.title = "Edit project";
    this.url = global.url;
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

  onSubmit(project_new):any{
    console.log('project added:', this.project);

    this._projectService.saveProject(this.project).subscribe(
      response => {
        if(response.project){
          this.checklink = global.url+'/project/'+response.project._id;
          this.status = 'success';

          //Upload image
          this._uploadService.makeFileRequest(global.url+'/uploadimage/'+response.project._id, [], this.filesToUpload, 'image').then(
            (result:any) => {
              console.log('Image uploaded:',result);
              
              // form.reset();    //"form not found"...
              // go to previous page or item description page (with current ID)
            }
          );

        }
        else{
          this.status = 'failure';
        }
        console.log('response:',response);
      },
      error => {
        console.log(error);
      }
    );
  }

  fileChangeEvent(fileInput:any){
    console.log(fileInput.target);
    
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}
