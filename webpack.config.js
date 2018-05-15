const path = require('path');

module.exports = {
  entry: ['./src/Index.js'],
  output: {
    path: path.join(__dirname, 'public/js'),
    filename: 'app.built.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
