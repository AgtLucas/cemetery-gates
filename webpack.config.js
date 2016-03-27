var path = require('path')
var webpack = require('webpack')

const config = {

  devtool: 'eval-source-map',

  entry: [
    'webpack-hot-middleware/client', path.join(__dirname, 'app/main.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.css?$/,
      loader: 'style.css'
    }]
  }

}
