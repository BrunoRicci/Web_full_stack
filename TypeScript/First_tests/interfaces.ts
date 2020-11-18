
interface ShirtBase{    //Class declarations
    setColor(color:string):any;
    getColor():string;
}

//Decorator -> adds attributes or functions to any class.
function addMethod(data:string){
    return function(target: Function){
        target.prototype.addedMethod = function():void{
            console.log('Added function. data='+data);
        }
    }
}

@addMethod('some data')
class Shirt implements ShirtBase{

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

    public setColor(color:string){
        this.color = color;
    }
    public getColor(){
        return this.color;
    }
}

class T_Shirt extends Shirt{
    public drawing:boolean;

    public hasDrawing():boolean{
        if (this.drawing)
            return true;
        else
            return false;
    }
}

var x = new Shirt('red','asd','asdds','M',15);
console.log('Class Shirt object:',x);
var y = new T_Shirt('red','asd','asdds','M',15);
console.log('Class T_Shirt object:',y);

console.log(x.addedMethod());


