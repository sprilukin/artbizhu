const express = require("express");
const url = require("url");
const router = express.Router();
const productCategoriesService = require("../../service/productCategoriesService");
const asyncServiceOperationHandler = require("../util/asyncServiceOperationHandler");

// GET /products listing.
router.get("/", function(req, res, next) {
    let query = url.parse(req.url, true).query,
        limit = Number(query.limit),
        offset = Number(query.offset);

    asyncServiceOperationHandler.handle(productCategoriesService.findAll(offset, limit), res, next);
});

// GET /product/1
router.get("/:id", function(req, res, next) {
    asyncServiceOperationHandler.handle(productCategoriesService.findById(req.params.id), res, next);
});

// POST /products
router.post("/", function(req, res, next) {
    asyncServiceOperationHandler.handle(productCategoriesService.add(req.body), res, next);
});

router.put("/:id", function(req, res, next) {
    asyncServiceOperationHandler.handle(productCategoriesService.updateById(req.params.id, req.body), res, next);
});

router.delete("/:id", function(req, res, next) {
    asyncServiceOperationHandler.handle(productCategoriesService.deleteById(req.params.id), res, next);
});

router.delete("/", function(req, res, next) {
    asyncServiceOperationHandler.handle(productCategoriesService.deleteAll(), res, next);
});

module.exports = router;