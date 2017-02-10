const UglifyJSPlugin = require("uglifyjs-webpack-plugin"),
    OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin"),
    main = require("./webpack.config.main"),
    theme = require("./webpack.config.theme"),
    vendor = require("./webpack.config.vendor");

const profile = require("./profile");

const configs = [
    vendor,
    theme,
    main
];

configs.forEach((config) => {

    config.devtool = profile.devtool;

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
});

module.exports = configs;