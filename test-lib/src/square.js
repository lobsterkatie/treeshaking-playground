// this counts as its own side effect, so if nothing else from this file is
// included in the final bundle, try commenting this out
console.log("---------- square.js ----------");

export function square(x) {
  return x * x;
}

export function sayhi() {
  // commenting out this side effect still won't allow the code to be dropped
  console.log("saying hi");
  return "hi";
}

// assigning to a variable will get dropped
// export const x = 5;

// calling a function won't, even if the variable it gets assigned to does get eliminated
// export const exportedHiString = sayhi();
// const internalHiString = sayhi();
