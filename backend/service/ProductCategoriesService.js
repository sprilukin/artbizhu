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
            let extension = fileUtil.getExtensionByMimeType(file.mimetype);
            let fileName = `${file.filename}.${extension}`;

            return {
                oldName: file.path,
                newName: path.resolve(profile.fileStoragePath, `${file.filename}.${extension}`),
                uri: fileName
            };
        });

        let images = options.productCategory.images.reduce((memo, image) => {
            if (image.uri) {
                memo.push(image);
            } else if (image.file) {
                memo.push({
                    uri: `${filesToMove[image.index].uri}`
                });
            }

            return memo;
        }, []);

        let productCategory = Object.assign({}, options.productCategory, {
            images: images
        });

        return fileUtil.renameFiles(filesToMove).then(() => {
            return ProductCategory.update({_id: id}, {
                $set: {
                    __v: productCategory.__v + 1,
                    updated_at: new Date(),
                    name: productCategory.name,
                    description: productCategory.description,
                    images: images
                }
            }).then(function() {
                return ProductCategory.findById(id).exec();
            });
        });
    }
}

module.exports = ProductCategoriesService;