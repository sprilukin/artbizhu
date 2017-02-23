const Product = require("../models/Product");
const settings = require("../../common/settings");

module.exports = {
    getAllProducts: function(offset, limit) {
        return Product.aggregate([
            {
                $skip: Number(offset) || 0
            },
            {
                $limit: Number(limit) || settings.pagination.limit
            },
            {
                $project: {
                    _id: false,
                    name: true,
                    src: true
                }
            }
        ]);
    },

    getProductById: function(id) {
        return Product.findById(id).exec();
    },

    addProduct: function(productJson) {
        return Product.create(productJson);
    },

    updateProduct: function(id, productJson) {
        return Product.findByIdAndUpdate(id, productJson);
    },

    deleteProduct: function(id) {
        return Product.findByIdAndRemove(id);
    },

    deleteAll: function() {
        return Product.remove({});
    }
};
