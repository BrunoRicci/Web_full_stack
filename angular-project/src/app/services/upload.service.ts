import { Inject, Injectable } from "@angular/core";
import { global } from "./global";

@Injectable()
export class UploadService{
    public url:string;

    constructor(){
        this.url = global.url;
    }

    makeFileRequest(url:string, params:Array<string>, files:Array<File>, name:string){
        return new Promise(function(resolve, reject){
            var formdata:any = new FormData();
            var xhr = new XMLHttpRequest();

            for (let i = 0; i < files.length; i++) {
                formdata.append(name, files[i], files[i].name);
            }

            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4){
                    if(xhr.status == 200){
                        resolve(JSON.parse(xhr.response));
                    }else{
                        reject(xhr.response);
                    }
                }
            };

            xhr.open('POST', url, true);
            xhr.send(formdata);

        })
    }
}