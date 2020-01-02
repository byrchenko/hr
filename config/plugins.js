const path = require("path");
const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const JavaScriptObfuscator = require('webpack-obfuscator');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {

    /**
     * Minify js
     */
    terser: new TerserPlugin({
        sourceMap: false,
        extractComments: false,
        terserOptions: {
            ecma: undefined,
            warnings: false,
            parse: {},
            compress: {},
            mangle: true,
            module: false,
            output: null,
            toplevel: false,
            nameCache: null,
            ie8: false,
            keep_classnames: undefined,
            keep_fnames: false,
            safari10: false,
        }
    }),

    /**
     * Clean build directory
     */
    cleanBuild: new CleanWebpackPlugin({
        dangerouslyAllowCleanPatternsOutsideProject: ['**/*', path.join(process.cwd(), '../**/*')],
    }),

    /**
     * Creates index.html for build
     */
    createHTML: new HtmlWebpackPlugin({
        template: paths.htmlTemplate,
        hash: true,
        inject: false,
        filename: "../index.html"
    }),

    /**
     * Minify css
     */
    cssMin: new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
        ignoreOrder: false,
    }),

    /**
     * Analyze bundle
     */
    bundleAnalyzer: new BundleAnalyzerPlugin({
        analyzerMode: "disabled",
        generateStatsFile: true
    }),

    /**
     * Makes bundle unreadable
     */
    obfuscator: new JavaScriptObfuscator({
        compact: true,
        controlFlowFlattening: false,
        deadCodeInjection: false,
        debugProtection: false,
        debugProtectionInterval: false,
        disableConsoleOutput: true,
        identifierNamesGenerator: 'hexadecimal',
        log: false,
        renameGlobals: false,
        rotateStringArray: true,
        selfDefending: true,
        stringArray: true,
        stringArrayEncoding: false,
        stringArrayThreshold: 0.75,
        unicodeEscapeSequence: false
    })
};