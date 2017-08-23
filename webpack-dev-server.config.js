const webpack = require('webpack');
const path = require('path');
const TransferWebpackPlugin = require('transfer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');

const VENDOR_LIBS = [
  'react', 'redux', 'react-redux', 'react-dom', 'redux-form', 'redux-thunk'
];

const config = {
  entry: {
    js: 'webpack/hot/dev-server',
    js: 'webpack/hot/only-dev-server',
    js: 'react-hot-loader/patch',
    js: [path.join(__dirname, '/src/app/app.js')],

  },
  devServer: {
    contentBase: 'src/www',
    hot: true,
    inline: true,
    port: 3001,
    host: 'localhost',
  },
  devtool: 'eval',
  output: {
    path: buildPath, // Path of output file
    filename: 'app.js'
  },
  plugins: [
    // Enables Hot Modules Replacement
    new webpack.HotModuleReplacementPlugin(),   
    new webpack.NoEmitOnErrorsPlugin(),
    new TransferWebpackPlugin([
      { from: 'www' },
    ], path.resolve(__dirname, 'src'))
  ],
  resolve: {
    // Look for modules in .ts(x) files first, then .js
    extensions: ['.ts', '.tsx', '.js'],

    // add 'src' to the modules, so that when you import files you can do so with 'src' as the relative route
    modules: ['src', 'node_modules'],
  },
  module: {
    loaders: [
      {
        // React-hot loader and
        test: /\.js$/, // All .js files
        loaders: ['babel-loader?presets[]=es2015&presets[]=stage-0&presets[]=react'], // react-hot is like browser sync and babel loads jsx and es6-7
        exclude: [nodeModulesPath],
      },
      {
        // React-hot loader and
        test: /\.tsx?$/, // All .js files
        loaders: ['babel-loader?presets[]=es2015&presets[]=stage-0&presets[]=react', 'ts-loader'], // react-hot is like browser sync and babel loads jsx and es6-7
        exclude: [nodeModulesPath],
      },
    ],
  },
};

module.exports = config;
