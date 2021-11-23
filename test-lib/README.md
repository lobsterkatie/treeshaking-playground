# Treeshaking Playground

To run:

- Run `yarn webpack --watch`
- Make changes to the code and the results should change as soon as you save
- Stop and restart the webpack build in order to see the effect of config changes

Things to play with:

- Comment varioius bits of code in and out
- Turn on one or the other of the loaders in the webpack config
- Change the target in the tsconfig to ES6

Things which count as side effects when they happen at the top level of a module:

- importing, even if the imports are never used
- console.log-ing
- assigning to a object property
- reading an object property
- creating an instance of a class, even if it's unused
- assigning to `window` or `global`
- calling a function
