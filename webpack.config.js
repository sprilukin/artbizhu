const path = require("path"),
    webpack = require("webpack"),
    UglifyJSPlugin = require("uglifyjs-webpack-plugin"),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const profile = require("./profile");

module.exports = {
    entry: {
        "js/testModule.js": "testModule.js",
        "css/bundle.css": "uikit.less"
    },

    output: {
        filename: "[name]",
        path: path.resolve(__dirname, "public")
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
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    // use: "css-loader?sourceMap=true!less-loader?sourceMap=true",
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true,
                                importLoaders: 1
                            }
                        },
                        {
                            loader: "less-loader",
                            options: {
                                sourceMap: true
                            }
                        }
                    ],

                    publicPath: "/"
                })
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "font/[hash:6].[name].[ext]",
                            //name: "[1].[name].[ext]",
                            // regExp: "node_modules/(.*)"
                        }
                    }
                ],
                include: [/node_modules/]
            },
            {
                test: /\.(png|jpg|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "img/[hash:6].[name].[ext]"
                        }
                    }
                ],
                include: [/node_modules/]
            },
            /*{
                test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            name: "[path][name].[ext]",
                            limit: "1024"
                        }
                    }
                ],
                exclude: [/node_modules/]
            }*/
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            "Promise": "promise-polyfill"
        }),
        new webpack.DefinePlugin({
            "UIkit": "uikit"
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin({
            filename: "[name]",
            disable: false,
            allChunks: true
        })
    ],

    devtool: "source-map"
};

if (profile.watch) {
    module.exports.watch = true;
    module.exports.watchOptions = {
        aggregateTimeout: 100
    };
}

if (profile.uglify) {
    module.exports.plugins.push(new UglifyJSPlugin({
        compress: {
            warnings: false,
            drop_console: true,
            unsafe: true
        },
        comments: false,
        sourceMap: true
    }));
    module.exports.plugins.push(new OptimizeCssAssetsPlugin({
        // assetNameRegExp: /bundle\.css&/,
        // cssProcessor: require("cssnano"),
        // canPrint: true,
        cssProcessorOptions: {
            discardComments: {
                removeAll: true
            }
        }
    }));
}