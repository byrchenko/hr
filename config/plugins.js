const path = require("path");
const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const JavaScriptObfuscator = require('webpack-obfuscator');

module.exports = {

    /**
     * Js minify
     */
    jsMin: new UglifyJsPlugin({
        test: /\.jsx?$/,
        parallel: true,
    }),

    /**
     * Clean build directory
     */
    cleanBuild: new CleanWebpackPlugin(),

    /**
     * Creates index.html for build
     */
    createHTML: new HtmlWebpackPlugin({
        template: paths.htmlTemplate,
        hash: true,
        inject: false
    }),

    /**
     * Minify css
     */
    cssMin: new MiniCssExtractPlugin({
        filename: './static/css/[name].css',
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