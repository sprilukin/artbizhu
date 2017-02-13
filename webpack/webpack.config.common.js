const webpack = require("webpack"),
    path = require("path"),
    // RemoveAssetsPlugin = require("./plugin/RemoveAssetsPlugin"),
    AssetsPlugin = require("assets-webpack-plugin");

const profile = require("../profile");

let config = {

    plugins: [
        // new RemoveAssetsPlugin(),
        new AssetsPlugin({
            filename: "assets.json",
            path: path.resolve(__dirname, "../public")
        }),
        new webpack.NoEmitOnErrorsPlugin(),
    ],

    devtool: profile.devtool,

    watch: profile.watch,
    watchOptions: {
        aggregateTimeout: 100
    },

    devServer: {
        historyApiFallback: false,
        noInfo: true,
        host: "localhost",
        port: 4000,
        proxy: {
            "*": "http://localhost:" + profile.port
        }
    }
};

module.exports = config;