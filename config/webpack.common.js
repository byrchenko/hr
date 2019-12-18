const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.jsx',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../build'),
    },

    resolve: {
        extensions: ['.js', '.jsx'],
    },

    module: {
        rules: [
            /* Style loader */
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },

            /* Image loader */
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader'],
            },

            /* Font loader */
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader'],
            },

            /* Babel loader */
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                    },
                },
            },
        ],
    },

    /* Creating index.html for production */
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            hash: true,
            inject: false
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false,
        }),
    ],
};
