import { Component, OnInit } from '@angular/core';
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

  constructor(
    private _petitionsService: PetitionsService
  ) { }

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

}
