console.log("---------- lib-main.js ----------");

import { cube } from "./cube.js";

// comment this out to see what remains even when the entire thing is a no-op
console.log(cube(5)); // 125
console.log("yo");

// this isn't included in the final bundle because webpack can't yet output true
// es6 modules in a way that's treeshakable (see
// https://github.com/webpack/webpack/issues/2933#issuecomment-920753325)
export const x = 26;
