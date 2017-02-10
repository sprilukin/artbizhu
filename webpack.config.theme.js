const path = require("path"),
    webpack = require("webpack"),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

    entry: {
        "css/bundle.css": "uikit.less"
    },

    output: {
        filename: "[name]",
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
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin({
            filename: "[name]",
            disable: false,
            allChunks: true
        })
    ]
};
