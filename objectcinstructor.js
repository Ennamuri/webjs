"use strict";
function car(make,model,price,engine){
    this.make = make;
    this.model = model;
    this.price = price;
    this.engine = engine;
}
let s100engine = {
    cylinders: 4,
    displacement:2000,
    horsepower:200
}
let mycar = new car("volv0","500",450000,s100engine);
console.log(`my car is ${mycar.make} ${mycar.model}`);

let caymannengine ={
    cylinders: 4,
    displacemenent: 23000,
    horsepower:7890
}
let yourcar = new car("porsche","798 caymann",67889,caymannengine);
console.log(`yourcar is a ${yourcar.make} ${yourcar.price}`);

function car(make,model,price,engine){
    this.make = make;
    this.model = model;
    this.price = price;
    this.engine = engine;
    this.details = function(){
        console.log(`          make: ${this.make}
        model: ${this.model}
        price: ${this.price}`);
    };
};
mycar = new car ("volvo", "s60",450000, s100engine);
console.log("my car details:\n");
mycar.details();
class vehicle{
    constructor(make,model,price,engine){
        this.make = make;
        this.model = model;
        this.price = price;
        this.engine = engine;
    }
    details = function(){
        console.log(`          make: ${this.make}
        model: ${this.model}
        price: ${this.price}`);
    };
};
mycar = new car ("volvo", "s60",450000, s100engine);
console.log("my car details:\n");
mycar.details();