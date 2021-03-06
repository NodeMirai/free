const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports =  {
  devtool: 'source-map',
  entry: path.resolve(__dirname, '../src/app.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name][hash].js?',
    chunkFilename: '[id].js'
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html'),
    })
  ]
}