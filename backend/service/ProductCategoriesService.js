const ProductCategory = require("../models/ProductCategory");
const GenericService = require("./GenericService");
const fileUtil = require("../util/fileUtil");
const profile = require("../../profile");
const path = require("path");

class ProductCategoriesService extends GenericService {
    constructor() {
        super(ProductCategory);
    }

    add(options) {
        return Promise.resolve();
    }

    updateById(id, options) {
        let filesToMove = options.files.map((file) => {
            return {
                oldName: file.path,
                newName: path.resolve(profile.fileStoragePath, `${file.filename}.png`)
            };
        });

        return fileUtil.renameFiles(filesToMove).then(() => {
            return Promise.resolve({});
        });
    }
}

module.exports = ProductCategoriesService;