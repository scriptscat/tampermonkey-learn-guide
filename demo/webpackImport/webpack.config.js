const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "none",
  entry: {
    cjs: "./commonIndex.cjs",
    ejs: "./esIndex.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "cjs.html", 
      chunks: ["cjs"],
    }),
    new HtmlWebpackPlugin({
      filename: "ejs.html",
      chunks: ["ejs"],
    }),
  ],
};
