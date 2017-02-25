const express = require("express");
const url = require("url");
const router = express.Router();
const productsService = require("../../service/productsService");
const asyncServiceOperationHandler = require("../util/asyncServiceOperationHandler");

// GET /products listing.
router.get("/", function(req, res, next) {
    let query = url.parse(req.url, true).query,
        limit = Number(query.limit),
        offset = Number(query.offset);

    asyncServiceOperationHandler.handleList(productsService.getAllProducts(offset, limit), res, next);
});

// GET /product/1
router.get("/:id", function(req, res, next) {
    asyncServiceOperationHandler.handle(productsService.findById(req.params.id), res, next);
});

// POST /products
router.post("/", function(req, res, next) {
    asyncServiceOperationHandler.handle(productsService.add(req.body), res, next);
});

router.put("/:id", function(req, res, next) {
    asyncServiceOperationHandler.handle(productsService.updateById(req.params.id, req.body), res, next);
});

router.delete("/:id", function(req, res, next) {
    asyncServiceOperationHandler.handle(productsService.deleteById(req.params.id), res, next);
});

router.delete("/", function(req, res, next) {
    asyncServiceOperationHandler.handle(productsService.deleteAll(), res, next);
});

module.exports = router;