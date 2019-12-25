const paths = require('./paths');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

    /**
     * Images loader
     */
    images: {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'file-loader',
        options: {
            outputPath: paths.imagesBuild,
            publicPath: paths.imagesPublic,
        },
    },

    /**
     * Font loader
     */
    font: {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
            outputPath: paths.fontsBuild,
            publicPath: paths.fontsPublic,
        },
    },

    /**
     * Babel
     */
    babel: {
        test: /\.jsx?$/,
        exclude: /(node_modules|build|config)/,
        loader: "babel-loader"
    },

    /**
     * SVG loader
     */
    svg: {
        test: /\.svg$/,
        use: [
            "babel-loader",
            {
                loader: "react-svg-loader",
                options: {
                    jsx: true, // true outputs JSX tags
                }
            },
        ]
    },

    /**
     * Sass loader (development)
     */
    sass: {
        test: /\.s[ac]ss$/i,
        use: [
            {
                loader: MiniCssExtractPlugin.loader,
                options: {
                    hmr: true,
                    // publicPath: paths.cssBuild,
                },
            },
            {
                loader: 'css-loader',
                options: {
                    sourceMap: true,
                    modules: {
                        localIdentName: '[name]__[local]--[hash:base64:5]',
                    },
                },
            },
            "resolve-url-loader",
            'sass-loader'
        ],
    },

    /**
     * Sass loader and minify (production)
     */
    sassMin: {
        test: /\.s[ac]ss$/i,
        use: [
            {
                loader: MiniCssExtractPlugin.loader,
                options: {
                    hmr: false,
                    publicPath: paths.cssBuild,
                },
            },
            {
                loader: 'css-loader',
                options: {
                    sourceMap: true,
                    modules: {
                        localIdentName: '[name]__[local]--[hash:base64:5]',
                    },
                },
            },
            "resolve-url-loader",
            'sass-loader'
        ],
    },
};