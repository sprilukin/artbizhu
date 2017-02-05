const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Todo = require('../models/Todo.js');

/* GET /todos listing. */
router.get('/', function(req, res, next) {
    Todo.find(function(err, todos) {
        if (err) {
            return next(err);
        }
        res.json(todos);
    });
});

router.post('/', function(req, res, next) {
    Todo.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;