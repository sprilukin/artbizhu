const path = require('path'),
    webpack = require("webpack"),
    UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || "development",
    WATCH = process.env.WATCH || false;

module.exports = {
    entry: {
        testModule: 'testModule.js'
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, "public", "javascripts")
    },

    resolve: {
        modules: [
            path.join(__dirname, "frontend"),
            "node_modules"
        ]
    },

    module: {
        rules: [
            {
                test: /whatwg-fetch\/fetch.js$/,
                use: 'imports-loader?self=>this'
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ['es2015'],
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
            'Promise': 'promise-polyfill'
        }),
        new webpack.NoEmitOnErrorsPlugin()
    ],

    devtool: "source-map"
};

if (WATCH) {
    module.exports.watch = true;
    module.exports.watchOptions = {
        aggregateTimeout: 100
    }
}

if (NODE_ENV === "production") {
    module.exports.plugins.push(new UglifyJSPlugin({
        compress: {
            warnings: false,
            drop_console: true,
            unsafe: true
        },
        comments: false,
        sourceMap: true
    }))
}