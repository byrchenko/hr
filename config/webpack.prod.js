const paths = require('./paths');
const plugins = require('./plugins');
const loaders = require('./loaders');

module.exports = {
    entry: paths.entryProd,

    output: {
        filename: 'bundle.js',
        path: paths.outputProd,
    },

    mode: 'production',

    devtool: 'source-map',

    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },

    optimization: {
        minimize: true,
        minimizer: [
            plugins.terser
        ],
        splitChunks: {
            chunks: 'all',
        },
    },

    module: {
        rules: [
            loaders.babel,
            loaders.font,
            loaders.images,
            loaders.svg,
            loaders.sassMin
        ],
    },

    plugins: [
        plugins.cleanBuild,
        plugins.createHTML,
        plugins.cssMin,
        plugins.obfuscator,
        plugins.bundleAnalyzer
    ],
};
