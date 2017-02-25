module.exports = {
    handle: function(promise, res, next) {
        promise.then(function(result) {
            res.json(result);
        }).catch(function(err) {
            return next(err);
        });
    }
};