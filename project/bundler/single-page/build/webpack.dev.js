const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports =  {
  devtool: 'source-map',
  entry: path.resolve(__dirname, '../src/app.tsx'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name][hash].js?',
    chunkFilename: '[id].js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
      /* {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      } */
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html'),
    })
  ]
}