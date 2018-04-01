const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const path = require("path");

const extractCss = new ExtractTextPlugin({
  filename: "cc-ss.min.css"
});

module.exports = {
  entry: `./src/js/main.js`,
  devtool: "source-map",
  devServer: {
    open: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          ExtractTextPlugin.loader,
          { loader: "css-loader", options: { importLoaders: 1 } },
          {
            loader: "postcss-loader",
            options: {
              plugins: [autoprefixer("last 2 versions"), cssnano()]
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    extractCss
  ]
};
