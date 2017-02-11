const webpack = require("webpack"),
    rimraf = require("rimraf");

const profile = require("./profile");

let config = {

    plugins: [
        {
            apply: (compiler) => {
                // rimraf.sync(compiler.options.output.path);
            }
        },
        new webpack.NoEmitOnErrorsPlugin(),
    ],

    devtool: profile.devtool,

    watch: profile.watch,
    watchOptions: {
        aggregateTimeout: 100
    }
};

module.exports = config;