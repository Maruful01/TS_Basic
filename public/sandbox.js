"use strict";
// union types in front or arrey
let mixed = [];
//  union types for normal variables
let uid;
// object 
let options;
options = {
    color: 'red',
    size: "M",
    price: 120
};
let option2;
// any type example
let anyTypeArr = [];
let anyTypeObect;
anyTypeArr.push("https://1234");
anyTypeArr.push(12);
anyTypeArr.forEach(e => {
    console.log(e);
});
// Normal function
function exampleFunction(a, b, optionalPT, defauptPT = false) {
    if (defauptPT != false)
        return a + b;
    else
        return false;
}
const objectAsParameter = (auth) => {
    return auth;
};
// Function signature
let greet;
let example1;
let example2;
example1 = (name) => {
    console.log("Name");
};
example2 = (auth) => {
    return auth;
};
// classes
class car {
    constructor(c, w, k) {
        this.color = c;
        this.wheels = w;
        this.key = k;
    }
    format() {
        return ` car is${this.color} and has ${this.wheels} wheels. Key: ${this.key}`;
    }
}
const car1 = new car("Black", 4, 123);
const car2 = new car("White", 4, 123);
let cares = [];
cares.push(car1);
cares.push(car2);
cares.forEach(e => {
    console.log(e);
});
