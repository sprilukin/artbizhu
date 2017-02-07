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
            {
                // test: "/node_modules\/whatwg-fetch/fetch\.js",
                // use: 'imports?this=>global!exports?fetch=global.fetch'
                // use: 'imports-loader?self=>{}!exports-loader?fetch=self.fetch'
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
        // new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            "typeof self": JSON.stringify("undefined")
        }),
        new webpack.ProvidePlugin({
            'Promise': 'promise-polyfill'
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