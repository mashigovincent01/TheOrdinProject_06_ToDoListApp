const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
            filename: 'index.html',
            template: 'src/index.html',
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    }
}