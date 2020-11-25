import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class PetitionsService{
    public url:string;

    constructor(
        public _http: HttpClient
    ){
        this.url = 'https://reqres.in/';
    }

    getUser(id:string):Observable<any>{
        return this._http.get(this.url+'api/users/'+id);
    }


}