import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { Shirt } from './shirt'
import { ShirtsService } from "../services/shirt.service";

@Component({
  selector: 'app-shirts',
  templateUrl: './shirts.component.html',
  styleUrls: ['./shirts.component.css'],
  providers:[ShirtsService]
})
export class ShirtsComponent implements OnInit {

  public title:string = 'Shirts:';
  public shirts:Array<Shirt>;
  public color:string;
  public my_brand:string;

  constructor(
    private _shirtsService: ShirtsService
  ){
    // this.shirts = [
    //   new Shirt('Crop', 'M', 18.5,26),
    //   new Shirt('Polo', 'S', 15,10),
    //   new Shirt('Armani', 'L', 45, 8),
    //   new Shirt('Van Heusen', 'M', 28.50, 0),
    //   new Shirt('Yves Saint Lorent', 'XL', 32, 4)
    // ];
    
    this.color = 'blue';
  }

  ngOnInit(): void {
    console.log('Shirts component loaded:', this.shirts);
    this.shirts = this._shirtsService.getShirts();
  }

  public getBrand(){
    alert(this.my_brand);
  }

}
