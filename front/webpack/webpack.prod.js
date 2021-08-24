const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { merge } = require('webpack-merge')
const base = require('./webpack.base')

const src = '../src/'

module.exports = merge(base, {
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, src, 'index.html'),
            inject: true,
            minify: true,
        })
    ]
})
