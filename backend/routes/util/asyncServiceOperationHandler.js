const TOTAL_LIST_COUNT_HEADER = "Total-Count";

module.exports = {
    handle: function(promise, res, next) {
        promise.then(function(result) {
            res.json(result);
        }).catch(function(err) {
            return next(err);
        });
    },

    handleList: function(promise, res, next) {
        promise.then(function(result) {
            res.setHeader(TOTAL_LIST_COUNT_HEADER, result.total);
            res.json(result.list);
        }).catch(function(err) {
            return next(err);
        });
    }
};