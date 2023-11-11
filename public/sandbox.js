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
function exampleFunction(a, b, optionalPT, defauptPT = false) {
    if (defauptPT != false)
        return a + b;
    else
        return false;
}
