const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./src/logger.js", // Entry point of your package
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "smart-logger.js", // Output file name
    library: "SmartLogger", // Expose the library globally
    libraryTarget: "umd", // Universal Module Definition (works for CommonJS, AMD, and as a global variable)
    globalObject: "this", // Ensures compatibility with both browser and Node.js
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply Babel to all .js files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"], // Transpile modern JS to ES5
          },
        },
      },
    ],
  },
  optimization: {
    minimize: true, // Enable minification
    minimizer: [new TerserPlugin()], // Use Terser for minification
  },
  devtool: "source-map",
  mode: "production", // Set to 'development' for debugging
};
