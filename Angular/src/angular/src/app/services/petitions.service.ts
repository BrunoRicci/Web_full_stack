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

    addUser(user):Observable<any>{
        let json_values = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-type','applicatoin/json'); //Set header
        console.log('sending values:'+json_values);
        
        return this._http.post(this.url+'api/users',json_values, {headers: headers});
    }

}