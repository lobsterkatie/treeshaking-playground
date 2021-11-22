// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

// const isProduction = process.env.NODE_ENV == 'production';
const isProduction = true;

const config = {
  entry: "./src/lib-main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  devtool: false,
  optimization: {
    minimize: true,
    innerGraph: true,
    providedExports: true,
    usedExports: true,
    sideEffects: true,
    mangleExports: false,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
          compress: {
            defaults: false,
            // dead_code: true,
            side_effects: true,
            unused: true,
          },
          mangle: false,
          format: {
            beautify: true,
            // comments: "all",
          },
        },
      }),
    ],
  },
  module: {
    rules: [
      // Learn more about loaders from https://webpack.js.org/loaders/
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
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
