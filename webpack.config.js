let path = require('path'),
    webpack = require("webpack");

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
            /*{
                test: require.resolve("whatwg-fetch"),
                use: 'imports?this=>global!exports?fetch=global.fetch'
            },*/
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ['es2017'],
                            plugins: ["transform-runtime"]
                        }
                    }
                ],
                exclude: [/node_modules/]
            }
        ]
    },

    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            // 'Promise': 'es6-promise', // Thanks Aaron (https://gist.github.com/Couto/b29676dd1ab8714a818f#gistcomment-1584602)
            // 'fetch': 'whatwg-fetch'
        }),
        //new webpack.optimize.CommonsChunkPlugin('app', null, false),
        // new webpack.NoEmitOnErrorsPlugin(),
        // new HtmlWebpackPlugin({
        //     template: path.resolve('./', 'index.html'),
        //     webpackDevServer: '/webpack-dev-server.js'
        // })
    ],

    // watch: true,
    // watchOptions: {
    //     aggregateTimeout: 100
    // },

    devtool: "source-map"
};