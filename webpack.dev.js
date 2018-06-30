const merge = require('webpack-merge')
const common = require('./webpack.common')
const webpack = require('webpack')

module.exports = merge(common, {
  devServer: {
    contentBase: './des',
    inline: true
  },
  mode: 'development'
})