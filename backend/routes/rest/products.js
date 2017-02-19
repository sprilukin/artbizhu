const express = require("express");
const url = require("url");
const router = express.Router();
// const mongoose = require("mongoose");
const Product = require("../../models/Product");
const settings = require("../../../common/settings");

// GET /products listing.
router.get("/", function(req, res, next) {
    let query = url.parse(req.url, true).query;

    let pagination = {
        limit: Number(query.limit) || settings.pagination.limit,
        offset: Number(query.offset) || 0
    };

    Product.aggregate([
        {
            $skip: pagination.offset
        },
        {
            $limit: pagination.limit
        },
        {
            $project: {
                _id: false,
                name: true,
                src: true
            }
        }
    ], function(err, result) {
        if (err) return next(err);

        res.json(result);
    });
});

// GET /product/1
router.get("/:id", function(req, res, next) {
    Product.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

// POST /products
router.post("/", function(req, res, next) {
    Product.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


router.put("/:id", function(req, res, next) {
    Product.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.delete("/:id", function(req, res, next) {
    Product.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.delete("/", function(req, res, next) {
    Product.remove({}, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;