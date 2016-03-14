var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: './src/index.js',
    vendor: ['angular', 'angular-route']
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './dist')
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor","vendor.bundle.js")
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'html'
      }
    ]
  }
};
