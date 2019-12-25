const path = require("path");
const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const config = require("./config/webpack.dev.js");

const compiler = webpack(config);
const app = express();
const PORT = 3333;

app.use(
	webpackDevMiddleware(compiler, {
		publicPath: config.output.publicPath,
	}),
);

app.listen(PORT, function() {
	console.log(`Front server listening on port ${PORT}!`);
});
