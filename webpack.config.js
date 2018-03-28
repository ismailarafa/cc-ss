const ExtractTextPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

const extractCss = new ExtractTextPlugin({
  filename: "cc-ss.min.css"
});

module.exports = {
  context: `${__dirname}/src`,
  entry: `./index.js`,
  output: {
    path: __dirname
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
  plugins: [extractCss]
};
