const path = require("path"),
    webpack = require("webpack");

module.exports = {
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
    ]
};
