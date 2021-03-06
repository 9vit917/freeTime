const path = require('path');
const miniCssExtractLoader = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    miniCssExtractLoader.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new miniCssExtractLoader({
            filename: 'style.[contenthash].css'
        }),
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html'
        })
    ]
}