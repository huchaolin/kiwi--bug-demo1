'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const loaderInculdePaths = [
  path.join(__dirname, '../src'),
];

const config = {
  entry: {
    index: [
      path.join(__dirname, '../src/index.js'),
    ]
  },
  output: {
    path: path.join(__dirname, '../dist'),
    // 如果是同步模块的时候，一般命名为bundle
    filename: '[name].bundle.js',
    // 如果是动态引入，一般命名为chunk
    chunkFilename: '[name].chunk.js',
    publicPath: '',
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        include: loaderInculdePaths,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        }]
      }
    ],
  },

  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      '@i18n': path.join(__dirname, '../i18n'),
    }
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.join(__dirname, '../src/index.html') }),
  ],
};


module.exports = config;
