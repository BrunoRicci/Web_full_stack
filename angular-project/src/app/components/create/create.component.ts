import { formatCurrency, getLocaleMonthNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Project } from "../../models/project";
import { ProjectService } from "../../services/project.service";
import { global } from "../../services/global";
import { UploadService } from "../../services/upload.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService]
})
export class CreateComponent implements OnInit {
  public title:string;
  public project:Project;
  public status:string;
  public checklink:string;
  public filesToUpload:Array<File>;

  constructor(
    private _projectService:ProjectService,
    private _uploadService: UploadService
  ){
    this.title = "Create project";
    this.project = new Project('','','','',2020,'','');
  }

  ngOnInit(): void {
  }

  onSubmit(project_new):any{
    console.log('project added:', this.project);

    this._projectService.saveProject(this.project).subscribe(
      response => {
        if(response.project){
          this.checklink = global.url+'/project/'+response.project._id;

          //Upload image
          this._uploadService.makeFileRequest(global.url+'/uploadimage/'+response.project._id, [], this.filesToUpload, 'image').then(
            (result:any) => {
              this.status = 'success';
              console.log('Image uploaded:',result);
              // form.reset();    //"form not found"...
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
