const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
  'react', 'redux', 'react-redux', 'react-dom',
   'redux-form', 'redux-thunk'
];

const config = {
  // Entry points to the project
  entry: {
    js: 'webpack/hot/dev-server',
    js: 'webpack/hot/only-dev-server',
    js: 'react-hot-loader/patch',   
    js:[path.join(__dirname, '/src/app/app.js')],
   
  },
  // Server Configuration options
  devServer: {
    contentBase: 'src/www', // Relative directory for base of server
    hot: true, // Live-reload
    inline: true,
    port: 3001, // Port Number
    host: 'localhost', // Change to '0.0.0.0' for external facing server
  },
  devtool: 'eval',
  output: {
    path: buildPath, // Path of output file
    filename:  'app.js'
  },
  plugins: [
    // Enables Hot Modules Replacement
    new webpack.HotModuleReplacementPlugin(),
    // Allows error warnings but does not stop compiling.
    new webpack.NoEmitOnErrorsPlugin(),
    //  new webpack.optimize.CommonsChunkPlugin({
    //   names: ['vendor', 'bundle']
    // }),
    //  new HtmlWebpackPlugin({
    //   template: 'src/www/index.html'
    // }),
    // Moves files
    new TransferWebpackPlugin([
      { from: 'www'},
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
