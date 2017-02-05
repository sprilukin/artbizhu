let path = require('path');

module.exports = {
    entry: {
        testModule: './src/testModule.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, "..", 'backend', "public", "javascripts")
    }
};