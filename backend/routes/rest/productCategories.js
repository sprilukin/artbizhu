const express = require("express");
const router = express.Router();
// const mongoose = require("mongoose");
const ProductCategory = require("../../models/ProductCategory");

// GET /products listing.
router.get("/", function(req, res, next) {
    ProductCategory.find(function(err, result) {
        if (err) return next(err);

        res.json(result);
    });
});

// GET /product/1
router.get("/:id", function(req, res, next) {
    ProductCategory.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

// POST /products
router.post("/", function(req, res, next) {
    ProductCategory.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


router.put("/:id", function(req, res, next) {
    ProductCategory.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.delete("/:id", function(req, res, next) {
    ProductCategory.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.delete("/", function(req, res, next) {
    ProductCategory.remove({}, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;