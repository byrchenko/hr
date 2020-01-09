const paths = require('./paths');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PUBLIC_PATH = process.env.PUBLIC_PATH || "/hr/static";

module.exports = {

    /**
     * Images loader
     */
    images: {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'file-loader',
    },

    /**
     * Font loader
     */
    font: {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        exclude: /src\/_svg/,
        options: {
            publicPath: PUBLIC_PATH,
        },
        loader: 'file-loader',
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
        exclude: /src\/_fonts/,
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