
export class Shirt{

    constructor(color:string,model:string,brand:string,size:string,price:number){
        this.color=color;
        this.model=model;
        this.brand=brand;
        this.size=size;
        this.price=price;
    }

    public color: string;
    public model: string;
    public brand: string;
    public size: string;
    public price: number;

}

class MyClass{

    constructor(
        public attr1:string,    //This allows to create the attribute and assign it a value when the object is created.
        public attr2:number,
        public attr3:boolean
    ){}

}

// var my_shirt = new Shirt('blue','12323asd','Adidas','M',11.5);

var c = new MyClass('asd',1,false);
// console.log(my_shirt);

// console.log(my_shirt.color);
