// cube.js

import { square } from "./square.js";
// import * as squareModule from "./square.js";

export function cube(x) {
  return x * x * x;
  // return square(x) * x;
  // return squareModule.square(x) * x;
}

// an object merely existing will get dropped
// const obj = {};

// but assigning to that object won't
// obj.hello = "howdy";

// nor will reading from the object
// const stuff = obj.things;

// defining a class will get dropped
// export class Cat {
//   static species = "catus felinus";
//
//   meow() {
//     console.log("meow");
//   }
// }

// but creating an instance object won't, even though it's not exported and
// never used (also, the whole class is kept, even though we don't use any of
// it) new Cat();

console.log("cube.js loaded");
