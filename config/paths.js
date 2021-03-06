const path = require('path');

const staticBuild = path.resolve(__dirname, '../build/static');

module.exports = {
    entryProd: path.resolve(__dirname, '../src/index.jsx'),
    entryDev: path.resolve(__dirname, '../src/index.jsx'),
    outputProd: path.resolve(__dirname, '../build/static'),
    outputDev: path.resolve(__dirname, '../build/static'),
    htmlTemplate: path.resolve(__dirname, '../src/index.html'),
};