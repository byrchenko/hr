const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: "development",

    entry: './src/index.jsx',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },

    devtool: 'cheap-eval-source-map',

    devServer: {
        contentBase: './build',
        open: true,
        port: 3000
    },

    resolve: {
        extensions: ['.js', '.jsx'],
    },

    module: {
        rules: [

            /* Style loader */
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },

            /* Image loader */
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },

            /* Font loader */
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },

            /* Css loader */
            {
                test: /\.s[ac]ss$/i,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            localIdentName: '[name]__[local]--[hash:base64:5]',
                        },
                    }
                }, {
                    loader: 'sass-loader'
                }],
            },
        ],
    },

    /* Creating index.html for production */
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            inject: true
        }),
    ],
};