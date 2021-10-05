import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Project } from "../models/project";
import { global } from "./global";

@Injectable()
export class ProjectService{
    public url:string;

    constructor(
        private _http:HttpClient
    ){
        this.url = global.url;
    }

    testService(){
        return 'Testing Angular service.'
    }

    saveProject (project:Project): Observable<any>{
        let params = JSON.stringify(project);
        console.log('project to be saved:', params);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        
        return this._http.post(this.url+'/save', params, {headers: headers});
    }

    getProjects():Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url+'/projects', {headers: headers});
    }

    getProject(id:string):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url+'/project/'+id, {headers: headers});
    }

    deleteProject(id:string):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.delete(this.url+'/deleteproject/'+id, {headers: headers});
    }

    updateProject (project:Project): Observable<any>{
        let params = JSON.stringify(project);
        console.log('project to be updated:', params);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        
        return this._http.put(this.url+'/update', params, {headers: headers});
    }

}