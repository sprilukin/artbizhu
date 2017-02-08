const path = require('path'),
    webpack = require("webpack"),
    UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || "development",
    WATCH = process.env.WATCH || false;

module.exports = {
    entry: {
        "javascripts/testModule.js": 'testModule.js',
        // "css/uikit.css": 'uikit.less'
    },

    output: {
        filename: '[name]',
        path: path.resolve(__dirname, "public"),
        publicPath: "/"
    },

    resolve: {
        modules: [
            path.join(__dirname, "frontend/js"),
            path.join(__dirname, "frontend/css"),
            "node_modules"
        ],
    },

    module: {
        rules: [
            {
                test: /whatwg-fetch\/fetch.js$/,
                use: 'imports-loader?self=>undefined'
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
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'less-loader'
                ]
            },
            {
                test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: "static/[name].[ext]"
                        }
                    }
                ]
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