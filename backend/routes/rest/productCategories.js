const express = require("express");
const url = require("url");
const router = express.Router();
const ProductCategoriesService = require("../../service/ProductCategoriesService");
const asyncServiceOperationHandler = require("../util/asyncServiceOperationHandler");
const fileUpload = require("../../app/fileUpload");
const settings = require("../../../common/settings");

const productCategoriesService = new ProductCategoriesService();

let productCategoriesFileUploads = fileUpload.array("image", settings.images.maxUploadCount);

// GET /products listing.
router.get("/", function(req, res, next) {
    let query = url.parse(req.url, true).query,
        limit = Number(query.limit),
        offset = Number(query.offset);

    asyncServiceOperationHandler.handleList(productCategoriesService.findAll(offset, limit), res, next);
});

// GET /product/1
router.get("/:id", function(req, res, next) {
    asyncServiceOperationHandler.handle(productCategoriesService.findById(req.params.id), res, next);
});

// POST /products
router.post("/", productCategoriesFileUploads, function(req, res, next) {
    asyncServiceOperationHandler.handle(productCategoriesService.add({
        productCategory: JSON.parse(req.body.productCategory),
        files: req.files
    }, res, next));
});

router.put("/:id", productCategoriesFileUploads, function(req, res, next) {
    asyncServiceOperationHandler.handle(productCategoriesService.updateById(req.params.id, {
        productCategory: JSON.parse(req.body.productCategory),
        files: req.files
    }, res, next));
});

router.delete("/:id", function(req, res, next) {
    asyncServiceOperationHandler.handle(productCategoriesService.deleteById(req.params.id), res, next);
});

router.delete("/", function(req, res, next) {
    asyncServiceOperationHandler.handle(productCategoriesService.deleteAll(), res, next);
});

module.exports = router;