import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-url-parameter',
  templateUrl: './url-parameter.component.html',
  styleUrls: ['./url-parameter.component.css']
})
export class UrlParameterComponent implements OnInit {
  public param1:string;
  public param2:string;
  public template1:boolean;

  constructor(
    private _router:Router,
    private _route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe((p:Params)=>{
      console.log(p);
      this.param1 = p.param1;
      this.param2 = p.param2;
      console.log('param1 = ',this.param1);
      console.log('param2 = ',this.param2);
      
    });
    this.template1 = true;
  }

  redirect(url:string) {
    this._router.navigate([url]);
  }

}
