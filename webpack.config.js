const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/app/app.js',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: [{loader: 'babel-loader', options: { presets: ['env'] } }]},
    ],
  },
  output: {
    filename: '[name]-[hash].js',
    path: path.resolve('./static'),
  }
}
