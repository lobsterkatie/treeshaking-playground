// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

const config = {
  // setting this to `production` triggers optimization, which includes treeshaking
  mode: "production",

  // corresponds to the `main`/`module`/`browser` entries in `package.json`
  entry: "./src/lib-main.js",

  output: {
    path: path.resolve(__dirname, "dist"),
  },

  // configure sourcemapping
  devtool: false,

  optimization: {
    // run terser, which will perform treeshaking
    minimize: true,
    // recursively analyze module graph for treeshaking
    innerGraph: true,
    // converts `export * from './xyz'` into `export { a, b, c } from './xyz'`
    providedExports: true,
    // mark which exports are actually used so terser can know what to drop
    usedExports: true,
    // flag modules as side-effect free and listen to package.json `sideEffects` flag
    sideEffects: true,
    // don't minimize exported variables
    mangleExports: false,
    // customize the terser plugin (unclear why it's an array)
    minimizer: [
      // for `TerserPlugin` options see https://github.com/webpack-contrib/terser-webpack-plugin#options
      new TerserPlugin({
        // for `terser` (the library inside the plugin) options see https://github.com/terser/terser#minify-options
        terserOptions: {
          // for `compress` options see https://github.com/terser/terser#compress-options
          compress: {
            // turn off all defaults so only a selective few can be turned back on
            defaults: false,
            // remove code which isn't reachable
            dead_code: true,
            // if code can be written in a smaller way using ES6, do it (haven't yet discovered an example where this matters)
            ecma: 2015,
            // remove code which is reachable but side-effect free and unused
            side_effects: true,
            // remove identifiers (variables and function names) which aren't ever referenced
            unused: true,
          },
          // don't mangle variable names
          mangle: false,
          // for `format` options see https://github.com/terser/terser#format-options
          format: {
            // pretty-print the code rather than shove it all onto one line
            beautify: true,
            // include comments in the generated bundle
            // comments: "all",
          },
        },
      }),
    ],
  },

  // configure how different kinds of incoming modules are processed
  module: {
    rules: [
      // loaders docs: https://webpack.js.org/loaders/
      // {
      //   test: /\.(js|jsx)$/i,
      //   loader: "babel-loader",
      // },
      // {
      //   test: /\.(js|tsx?)$/,
      //   use: "ts-loader",
      //   exclude: /node_modules/,
      // },
    ],
  },

  // defaults to outputting es6 code, but that an be changed here
  // for `target` options see https://webpack.js.org/configuration/target/
  // target: "web"
};

module.exports = config;
