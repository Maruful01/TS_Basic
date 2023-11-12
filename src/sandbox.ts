// union types in front or arrey
let mixed: (string | number | boolean)[] = [];
//  union types for normal variables
let uid : number | string;

// object 
let options: object;
options = {
  color: 'red',
  size: "M",
  price: 120
}
let option2 : {
  color: string,
  size: string,
  price: number
}
// any type example
let anyTypeArr: any[] = [];
let anyTypeObect: {auth: any, uid: any};
anyTypeArr.push("https://1234");
anyTypeArr.push(12);
anyTypeArr.forEach(e => {
  console.log(e);
});
// Normal function
function exampleFunction(a: number, b: number,  optionalPT?: string, defauptPT: number|  boolean = false ): any {
  if(defauptPT != false) return a+b;
  else return false;
}
// Arrow function
// How to use object as parameter 
// Type Aliasis
type user = {name: string, uid: number | string, image: string, isLoggedin: false};
const objectAsParameter = (auth: user) => {
  return auth;
}
// Function signature
let greet: Function;
let example1: (a: string) => void;
let example2: (a: user) => object;
example1 = (name) => {
  console.log("Name");
}
example2 = (auth) => {
  return auth;
}

// classes
class car {
  // Access Modifiers
  public color: string;
  readonly wheels: number;
  private key: number;
  constructor(c: string, w: number, k: number) {
    this.color = c;
    this.wheels = w;
    this.key = k;
  }
  format() {
    return ` car is${this.color} and has ${this.wheels} wheels. Key: ${this.key}`;
  }
}

const car1: car = new car("Black", 4, 123);
const car2: car = new car("White", 4, 123);

let cares: car[] = [];
cares.push(car1);
cares.push(car2);

cares.forEach(e => {
  console.log(e);
});
