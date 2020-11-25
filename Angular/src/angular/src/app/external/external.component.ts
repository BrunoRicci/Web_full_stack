import { Component, OnInit } from '@angular/core';
import { format } from 'path';
import { PetitionsService } from "../services/petitions.service";

@Component({
  selector: 'app-external',
  templateUrl: './external.component.html',
  styleUrls: ['./external.component.css'],
  providers: [PetitionsService]
})
export class ExternalComponent implements OnInit {
  public user:any;
  public userid:string = '1';

  public date;
  public new_user:any;

  constructor(
    private _petitionsService: PetitionsService
  ){ 
    this.new_user = {name:'', job:''};
  }

  ngOnInit(): void {
    this.loadUser();
    this.date = new Date();
  }

  loadUser():void{
    this.user = false;
    this._petitionsService.getUser(this.userid).subscribe(
      result => {
        this.user = result.data;
        console.log('user name:',this.user.first_name);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  onSubmit(u:any):any{
    console.log(u.form.value);
    this._petitionsService.addUser(u.form.value).subscribe(
      response => {console.log(response);
      },
      error => {console.log(error);
      }
    );
    u.reset();
    
    
  }

}
