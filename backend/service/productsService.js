const Product = require("../models/Product");
const genericServiceFactory = require("./genericServiceFactory");
const genericProductService = genericServiceFactory.create(Product);

module.exports = Object.assign({}, {
    getAllProducts: function(offset, limit) {
        return genericProductService.findAll([
            {
                $project: {
                    _id: false,
                    name: true,
                    src: true
                }
            }
        ], offset, limit);
    }
}, genericProductService);
