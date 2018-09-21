const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/app/app.js',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: [{loader: 'babel-loader', options: { presets: ['env'] } }]},
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './src/index.html'
    })
  ],
  output: {
    filename: '[name]-[hash].js',
    path: path.resolve('./static'),
  }
}
