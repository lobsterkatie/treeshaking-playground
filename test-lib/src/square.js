// square.js

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

// calling a function won't, even if the variable it gets assigned to does
// export const exportedHiString = sayhi();
// const internalHiString = sayhi();

// this won't get dropped even if the entire bundle is a no-op
console.log("square.js loaded");
