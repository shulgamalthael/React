const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require('path');

module.exports = {
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'review_build')
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: ["babel-loader"]
      },
      {
        test: /.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
}