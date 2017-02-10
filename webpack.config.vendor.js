const path = require("path");
const profile = require("./profile");

let config = {
    entry: {
        "js/vendor/jquery.wrapped.js": "jquery",
        "js/vendor/uikit.wrapped.js": "uikit"
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
        noParse: /(jquery|uikit)(\.min)?\.js$/,

        rules: [
            {
                test: /(jquery|uikit)(\.min)?\.js$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "js/vendor/[name].[ext]"
                        }
                    }
                ],
                include: [/node_modules/]
            }
        ]
    },

    plugins: [
    ],
};

if (profile.uglify) {
    config.resolve.alias = {
        jquery: "jquery/dist/jquery.min",
        uikit: "uikit/dist/js/uikit.min"
    };
}

module.exports = config;