const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const src = '../src/'

module.exports = {
    entry: {
        main: path.join(__dirname, src, 'index.tsx'),
    },
    output: {
        filename: '[name].[hash].bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        clean: true,
    },
    target: 'web',
    optimization: {
        moduleIds: 'deterministic',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                use: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
        modules: [
            'node_modules',
            path.join(__dirname, src),
            path.resolve(__dirname, `${src}/modules`),
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, src, 'index.html'),
            inject: true,
        }),
    ],
}
