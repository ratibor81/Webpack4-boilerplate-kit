// Webpack v4
const path = require('path');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
    //filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use:  [ 'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
        // use: ExtractTextPlugin.extract(
        //   {
        //     fallback: 'style-loader',
        //     use: ['css-loader', 'sass-loader']
        //   })
      }
    ]
  },
    plugins: [ 
        // new ExtractTextPlugin(
        //   {filename: 'style.[hash].css', disable: false, allChunks: true}
        // ),
        new CleanWebpackPlugin('dist', {} ),
        new MiniCssExtractPlugin({
          filename: 'style.css',
          //filename: 'style.[contenthash].css',
        }),
        new HtmlWebpackPlugin({
          inject: false,
          hash: true,
          template: './src/index.html',
          filename: 'index.html'
        }),
        //new WebpackMd5Hash()
  ],
  devServer: {
    overlay: true
  }
};