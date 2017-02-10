const main = require("./webpack.config.main"),
    theme = require("./webpack.config.theme"),
    vendor = require("./webpack.config.vendor");

const configs = [
    vendor,
    theme,
    main
];

module.exports = configs;