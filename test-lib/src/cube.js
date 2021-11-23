// this counts as its own side effect, so if nothing else from this file is
// included in the final bundle, try commenting this out (you'll notice that the
// equivalent `console.log()` from `square.js` remains)
console.log("---------- cube.js ----------");

// importing from `square.js` causes it to be included, even if nothing in it is
// used (at least under pure webpack)
import { square } from "./square.js";
// import * as squareModule from "./square.js";

export function cube(x) {
  // pick one of these iplementations to either use or not use `square.js`
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
export class Cat {
  // even with tsconfig targeting ES6 and terser's `ecma` option set to 2015,
  // this static property's existence is the difference between this class
  // getting dropped and it being included in the final bundle
  static species = "catus felinus";

  meow() {
    console.log("meow");
  }
}

// but creating an instance object won't, even though it's not exported and
// never used (also, the whole class is kept, even though we don't use any of
// it)
// new Cat();
