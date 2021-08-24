const path = require('path')
const { merge } = require('webpack-merge')
const base = require('./webpack.base')

module.exports = merge(base, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        historyApiFallback: true,
        port: 9000,
        hot: true,
    },
})
