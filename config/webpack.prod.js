const paths = require('./paths');
const plugins = require('./plugins');
const loaders = require('./loaders');
const PUBLIC_PATH = process.env.PUBLIC_PATH || "/hr/static/";

module.exports = {
    entry: paths.entryProd,

    output: {
        filename: 'bundle.js',
        chunkFilename: "[id].js",
        path: paths.outputProd,
        publicPath: PUBLIC_PATH
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
            chunks: 'all'
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
        // plugins.obfuscator,
        plugins.bundleAnalyzer
    ],
};
