const webpack = require("webpack"),
    RemoveAssetsPlugin = require("./plugin/RemoveAssetsPlugin");

const profile = require("../profile");

let config = {

    plugins: [
        new RemoveAssetsPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],

    devtool: profile.devtool,

    watch: profile.watch,
    watchOptions: {
        aggregateTimeout: 100
    }
};

module.exports = config;