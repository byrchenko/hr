const path = require('path');
const paths = require('./paths');
const plugins = require('./plugins');
const loaders = require('./loaders');
const PUBLIC_PATH = process.env.PUBLIC_PATH || "/hr/static";

module.exports = {
    entry: paths.entryDev,

    output: {
        filename: 'bundle.js',
        path: paths.outputDev,
        publicPath: PUBLIC_PATH
    },

    mode: 'development',

    devtool: 'inline-source-map',

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
        plugins.cssMin,
    ],
};
