const webpack = require('webpack');
const path = require('path');
const TransferWebpackPlugin = require('transfer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');

const VENDOR_LIBS = [
  'react', 'redux', 'react-redux', 'react-dom',
  'redux-form', 'redux-thunk'
];

const config = {
  entry: {
    styles: [
      path.join(__dirname, '/src/www/styles/main.css'),
      path.join(__dirname, '/src/www/styles/styles.css') ],
    bundle: [path.join(__dirname, '/src/app/app.js')],
    vendor: VENDOR_LIBS
  },

  //entry: [path.join(__dirname, '/src/app/app.js')],
  // Render source-map file for final build
  devtool: 'source-map',
  // output config
  output: {
    path: buildPath, // Path of output file
    filename: '[name].[hash].js'
  },
  plugins: [
    // Define production build to allow React to strip out unnecessary checks
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    // Minify the bundle
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    }),


    new webpack.optimize.CommonsChunkPlugin("vendor"),
    new HtmlWebpackPlugin({
      template: 'src/www/index.html',
      chunksSortMode: 'dependency'
    }),
    
    // Allows error warnings but does not stop compiling.
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin("main.css")
    
    // Transfer Files
    // new TransferWebpackPlugin([
    //   {from: 'www'},
    // ], path.resolve(__dirname, 'src')),
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
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract("css-loader")
      },
        //loaders: ["style-loader", "css-loader"],
        //include: [path.join(__dirname, '/src/www/main.css')],
        //use: ['to-string-loader', 'css-loader'],
      
      {
        test: /\.(jpg|png|gif)$/,
        use: 'file-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        }
      }
    ],
  },
};

module.exports = config;
