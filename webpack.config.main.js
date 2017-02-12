const path = require("path"),
    UglifyJSPlugin = require("uglifyjs-webpack-plugin"),
    webpack = require("webpack"),
    commonConfig = require("./webpack/webpack.config.common");

const profile = require("./profile");

let config = Object.assign({}, commonConfig, {
    externals: {
        jquery: "jQuery",
        uikit: "UIkit"
    },

    entry: {
        "js/main": "main.js"
    },

    output: {
        // filename: "[name].js?hash=[chunkhash:6]",
        filename: "[name].js?hash=[hash]",
        path: path.resolve(__dirname, "public")
    },

    resolve: {
        modules: [
            path.join(__dirname, "frontend/js"),
            "node_modules"
        ]
    },

    module: {
        rules: [
            {
                test: /whatwg-fetch\/fetch.js$/,
                use: "imports-loader?self=>undefined"
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["es2015"],
                            plugins: ["transform-runtime"]
                        }
                    }
                ],
                exclude: [/node_modules/]
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            }
        ]
    },

    plugins: commonConfig.plugins.concat([
        new webpack.ProvidePlugin({
            "Promise": "promise-polyfill"
        })
    ])
});

if (profile.uglify) {
    config.plugins.push(new UglifyJSPlugin({
        compress: {
            warnings: false,
            drop_console: true,
            unsafe: true
        },
        comments: false,
        sourceMap: true
    }));
}

module.exports = config;