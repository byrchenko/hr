const path = require('path');
const paths = require('./paths');
const plugins = require('./plugins');
const loaders = require('./loaders');

const PORT = 3003;

module.exports = {
    entry: paths.entryDev,

    output: {
        filename: 'bundle.js',
        path: paths.outputDev,
    },

    mode: 'development',

    devtool: 'cheap-eval-source-map',

    devServer: {
        contentBase: path.resolve(__dirname, "../build"),
        open: true,
        port: PORT,
    },

    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },

    module: {
        rules: [
            loaders.babel,
            loaders.font,
            loaders.images,
            loaders.svg,
            loaders.sass
        ],
    },

    plugins: [
        plugins.cleanBuild,
        plugins.createHTML,
    ],
};
