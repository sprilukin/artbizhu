const express = require("express");
const url = require("url");
const router = express.Router();
const productsService = require("../../service/productsService");

function handlePromise(promise, res, next) {
    promise.then(function(result) {
        res.json(result);
    }).catch(function(err) {
        return next(err);
    });
}

// GET /products listing.
router.get("/", function(req, res, next) {
    let query = url.parse(req.url, true).query,
        limit = Number(query.limit),
        offset = Number(query.offset);

    handlePromise(productsService.getAllProducts(offset, limit), res, next);
});

// GET /product/1
router.get("/:id", function(req, res, next) {
    handlePromise(productsService.findById(req.params.id), res, next);
});

// POST /products
router.post("/", function(req, res, next) {
    handlePromise(productsService.add(req.body), res, next);
});

router.put("/:id", function(req, res, next) {
    handlePromise(productsService.updateById(req.params.id, req.body), res, next);
});

router.delete("/:id", function(req, res, next) {
    handlePromise(productsService.deleteById(req.params.id), res, next);
});

router.delete("/", function(req, res, next) {
    handlePromise(productsService.deleteAll(), res, next);
});

module.exports = router;