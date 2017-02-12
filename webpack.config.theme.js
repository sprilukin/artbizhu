const path = require("path"),
    OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin"),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    commonConfig = require("./webpack/webpack.config.common");

const profile = require("./profile");

let config = Object.assign({}, commonConfig, {

    entry: {
        "css/bundle": "uikit.less"
    },

    output: {
        // filename: "[name].css?hash=[chunkhash:6]",
        filename: "[name].css?hash=[hash]",
        path: path.resolve(__dirname, "public")
    },

    resolve: {
        modules: [
            path.join(__dirname, "frontend/css"),
            "node_modules"
        ],
    },

    module: {
        rules: [
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
                            name: "font/[name].[ext]?hash=[hash]",
                            // name: "font/[name].[ext]?hash=[hash:6]",
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
                            name: "img/[name].[ext]?hash=[hash:6]"
                        }
                    }
                ],
                include: [/node_modules/]
            }
        ]
    },

    plugins: commonConfig.plugins.concat([
        new ExtractTextPlugin({
            filename: "[name].css?hash=[contenthash]",
            disable: false,
            allChunks: true
        })
    ])
});

if (profile.uglify) {
    config.plugins.push(new OptimizeCssAssetsPlugin({
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

module.exports = config;
