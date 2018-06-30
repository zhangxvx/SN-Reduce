const merge = require('webpack-merge')
const common = require('./webpack.common')
const webpack = require('webpack')

module.exports = merge(common, {
  mode: 'production',
  externals: {
    "react": 'React',
    "semantic-ui-react": 'semanticUIReact',
    "react-dom": 'ReactDOM'
  }
})