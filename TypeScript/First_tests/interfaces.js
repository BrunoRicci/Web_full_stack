var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Decorator -> adds attributes or functions to any class.
function addMethod(data) {
    return function (target) {
        target.prototype.addedMethod = function () {
            console.log('Added function. data=' + data);
        };
    };
}
var Shirt = /** @class */ (function () {
    function Shirt(color, model, brand, size, price) {
        this.color = color;
        this.model = model;
        this.brand = brand;
        this.size = size;
        this.price = price;
    }
    Shirt.prototype.setColor = function (color) {
        this.color = color;
    };
    Shirt.prototype.getColor = function () {
        return this.color;
    };
    Shirt = __decorate([
        addMethod('some data')
    ], Shirt);
    return Shirt;
}());
var T_Shirt = /** @class */ (function (_super) {
    __extends(T_Shirt, _super);
    function T_Shirt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    T_Shirt.prototype.hasDrawing = function () {
        if (this.drawing)
            return true;
        else
            return false;
    };
    return T_Shirt;
}(Shirt));
var x = new Shirt('red', 'asd', 'asdds', 'M', 15);
console.log('Class Shirt object:', x);
var y = new T_Shirt('red', 'asd', 'asdds', 'M', 15);
console.log('Class T_Shirt object:', y);
console.log(x.addedMethod());
