'use strict';

const merge = require('./webpack.merge');
const path = require('path');

const base = require('./webpack.base.config');

const port = 8080;


const devServer = {
  historyApiFallback: true,
  static: path.join(__dirname, '../src/'),
  host: 'localhost',
  port: port,
};

const dev = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer,
};

module.exports = merge(base, dev);
