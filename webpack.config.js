const path = require('path');
const miniCssExtractLoader = require('mini-css-extract-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /\.js$/,
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
            filename: 'style.css'
        })
    ]
}