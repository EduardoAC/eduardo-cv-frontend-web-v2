const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // webpack will take the files from ./src/index
  entry: './src/index',

  // and output it into /dist as bundle.js
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },

  // adding .ts and .tsx to resolve.extensions will help babel look for .ts and .tsx files to transpile
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@constants': path.resolve(__dirname, 'src/constants'),
    },
  },

  module: {
    rules: [
      // we use babel-loader to load our jsx and tsx files
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },

      // css-loader to bundle all the css files into one file and style-loader to add all the styles  inside the style tag of the document
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: [__dirname + '/public', __dirname + '/public/assets/images'],
    ...webpack.devServer,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.template.html',
      favicon: './public/favicon.ico',
    }),
    new CopyWebpackPlugin([{ from: 'public/assets/images', to: 'images' }]),
  ],
};
