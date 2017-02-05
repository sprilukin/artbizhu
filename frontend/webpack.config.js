let path = require('path');

module.exports = {
    entry: {
        testModule: './src/testModule.js'
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, "..", 'backend', "public", "javascripts")
    },

    watch: true,
    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: "source-map"
};