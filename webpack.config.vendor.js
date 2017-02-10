const path = require("path");

module.exports = {
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
        noParse: /(jquery|uikit)\.js$/,

        rules: [
            {
                test: /(jquery|uikit)\.js$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "js/vendor/[name].[ext]"
                        }
                    }
                ],
                include: [/node_modules/]
            },
        ]
    },

    plugins: [
    ],
};