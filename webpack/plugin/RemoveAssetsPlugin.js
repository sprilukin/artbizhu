let rimraf = require("rimraf"),
    path = require("path");

function RemoveAssetsPlugin() {
}

RemoveAssetsPlugin.prototype.apply = function(compiler) {
    compiler.plugin("emit", function(compilation, callback) {
        for (let filename in compilation.assets) {
            let assetPath = path.resolve(compiler.options.output.path, filename);
            console.log("Removing asset:", assetPath);
            rimraf.sync(assetPath);
        }

        callback();
    });
};

module.exports = RemoveAssetsPlugin;