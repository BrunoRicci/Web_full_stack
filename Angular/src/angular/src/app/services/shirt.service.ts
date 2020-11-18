import { Injectable } from "@angular/core";
import { Shirt } from "../shirts/shirt";

@Injectable()
export class ShirtsService{
    public shirts: Array<Shirt>;

    constructor(){
        this.shirts = [
            new Shirt('Crop', 'M', 18.5,26),
            new Shirt('Polo', 'S', 15,10),
            new Shirt('Armani', 'L', 45, 8),
            new Shirt('Van Heusen', 'M', 28.50, 0),
            new Shirt('Yves Saint Lorent', 'XL', 32, 4)
          ];
    }
    
    getShirts():Array<Shirt>{
        return this.shirts;
    }

    getText(){
        return "Hello world using serveces.";
    }
}
