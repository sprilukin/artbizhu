let path = require('path');

module.exports = {
    entry: {
        testModule: './frontend/testModule.js'
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, "public", "javascripts")
    },

    watch: true,
    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: "source-map"
};