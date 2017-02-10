const path = require("path"),
    UglifyJSPlugin = require("uglifyjs-webpack-plugin"),
    webpack = require("webpack");

const profile = require("./profile");

let config = {
    externals: {
        jquery: "jQuery",
        uikit: "UIkit"
    },

    entry: {
        "js/testModule.js": "testModule.js"
    },

    output: {
        filename: "[name]",
        path: path.resolve(__dirname, "public")
    },

    resolve: {
        modules: [
            path.join(__dirname, "frontend/js"),
            "node_modules"
        ],
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
            }
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            "Promise": "promise-polyfill"
        })
    ],

    devtool: profile.devtool
};

if (profile.watch) {
    config.watch = true;
    config.watchOptions = {
        aggregateTimeout: 100
    };
}

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