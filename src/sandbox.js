// union types in front or arrey
var mixed = [];
//  union types for normal variables
var uid;
// object 
var options;
options = {
    color: 'red',
    size: "M",
    price: 120
};
var option2;
// any type example
var anyTypeArr = [];
var anyTypeObect;
anyTypeArr.push("https://1234");
anyTypeArr.push(12);
anyTypeArr.forEach(function (e) {
    console.log(e);
});
// Normal function
function exampleFunction(a, b, optionalPT, defauptPT) {
    if (defauptPT === void 0) { defauptPT = false; }
    if (defauptPT != false)
        return a + b;
    else
        return false;
}
var objectAsParameter = function (auth) {
    return auth;
};
// Function signature
var greet;
var example1;
var example2;
example1 = function (name) {
    console.log("Name");
};
example2 = function (auth) {
    return auth;
};
// classes
var car = /** @class */ (function () {
    function car(c, w, k) {
        this.color = c;
        this.wheels = w;
        this.key = k;
    }
    car.prototype.format = function () {
        return " car is".concat(this.color, " and has ").concat(this.wheels, " wheels. Key: ").concat(this.key);
    };
    return car;
}());
var car1 = new car("Black", 4, 123);
var car2 = new car("White", 4, 123);
var cares = [];
cares.push(car1);
cares.push(car2);
cares.forEach(function (e) {
    console.log(e);
});
