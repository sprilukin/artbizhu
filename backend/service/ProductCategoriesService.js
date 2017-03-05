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
        let filesToMove = this._convertPathForMovingUploadedFiles(options.files);
        let images = this._convertImages(options.productCategory.images, filesToMove);
        let productCategory = options.productCategory;

        let removeFilesAndUpdateProductCategoryPromise = this._findRemovedFiles(images, id).then((files) => {
            let updateProductCategoryPromise = ProductCategory.update({_id: id}, {
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

            let removeFilesPromise = fileUtil.removeFiles(files, false);

            return Promise.all([removeFilesPromise, updateProductCategoryPromise]).then((results) => {
                return Promise.resolve(results[1]);
            });
        });

        let renameFilesPromise = fileUtil.renameFiles(filesToMove);

        return Promise.all([removeFilesAndUpdateProductCategoryPromise, renameFilesPromise]).then((results) => {
            return Promise.resolve(results[0]);
        });
    }

    _findRemovedFiles(images, id) {
        let existingImagesMap = images.reduce((memo, image) => {
            memo[image.uri] = true;

            return memo;
        }, {});

        return ProductCategory.findById(id).exec().then((productCategory) => {
            let files = productCategory.images.filter((image) => {
                return !existingImagesMap[image.uri];
            }).map((image) => {
                return this._getFullPathForFileStorage(image.uri);
            });

            return Promise.resolve(files);
        });
    }

    _convertPathForMovingUploadedFiles(files) {
        return files.map((file) => {
            let extension = fileUtil.getExtensionByMimeType(file.mimetype);
            let fileName = `${file.filename}.${extension}`;

            return {
                oldName: file.path,
                newName: this._getFullPathForFileStorage(fileName),
                uri: fileName
            };
        });
    }

    _getFullPathForFileStorage(fileName) {
        return path.resolve(profile.fileStoragePath, fileName);
    }

    _convertImages(images, uploadedFiles) {
        return images.reduce((memo, image) => {
            if (image.uri) {
                memo.push(image);
            } else if (image.file) {
                memo.push({
                    uri: `${uploadedFiles[image.index].uri}`
                });
            }

            return memo;
        }, []);
    }
}

module.exports = ProductCategoriesService;