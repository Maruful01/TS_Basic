import { hsaFormet } from "./interfaces/hasFormetter";
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
class car implements hsaFormet {
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

// interfaces
// interfaces are not used to generate an object
//  interface defines how an object should look
interface exampleOfInterface {
   id: number;
   password: string;
   email: string;
   isLoggedin: boolean;
   methodExample(a: string): void;
}

const interface1: exampleOfInterface = {
  id: 1234,
  password: "##004",
  email: "example@gmail.com",
  isLoggedin: true,
  methodExample (text): void {
    console.log("Something");
  },
}
// Generics
const addUID = <T extends object>(obj: T) => {
 let uid = Math.floor(Math.random () * 100);
 return {...obj, uid};
}
//  Generics with interfaces
interface resource<T> {
  uid: number;
  data: T; 
}

// Enums 
enum colors { Red, Green, Blue, Purple};

interface t_shirt<T extends colors> {
  size: string;
  color: T;
}

const user1_tShirt: t_shirt<colors> = {
 size: "M",
 color: colors.Blue,
}

// Tuples
let tup: [string, number, boolean];
tup = ["hi", 10, true];

