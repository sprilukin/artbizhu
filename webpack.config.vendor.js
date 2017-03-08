const path = require("path"),
    profile = require("./profile"),
    commonConfig = require("./webpack/webpack.config.common");

let config = Object.assign({}, commonConfig, {
    entry: {
        "js/vendor/jquery.wrapped.js": "jquery",
        "js/vendor/uikit.wrapped.js": "uikit",
        "js/vendor/uikit-icons.wrapped.js": "uikit/dist/js/uikit-icons",
        "js/vendor/fetch.wrapped.js": "whatwg-fetch"
    },

    output: {
        filename: "[name]",
        path: path.resolve(__dirname, "public")
    },

    resolve: {
        modules: [
            "node_modules"
        ],
    },

    module: {
        noParse: /.+\.js$/,

        rules: [
            {
                test: /(jquery|uikit).*(\.min)?\.js$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "js/vendor/[3].[ext]",
                            regExp: "node_modules\/(.*)\/dist\/(js\/)?([^\.]+)(\.min)?\.js"
                        }
                    }
                ],
                include: [/node_modules/]
            },
            {
                test: /fetch\.js$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "js/vendor/fetch.js"
                        }
                    }
                ],
                include: [/node_modules/]
            }
        ]
    },

    plugins: commonConfig.plugins.concat([
    ]),
});

if (profile.uglify) {
    config.resolve.alias = {
        jquery: "jquery/dist/jquery.min",
        uikit: "uikit/dist/js/uikit.min",
        "uikit-icons": "uikit/dist/js/uikit-icons.min"
    };
}

module.exports = config;