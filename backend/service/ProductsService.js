const Product = require("../models/Product");
const GenericService = require("./GenericService");

class ProductsService extends GenericService {
    constructor() {
        super(Product);
    }

    getAllProducts(offset, limit) {
        return super.findAll([{
            $project: {
                _id: false,
                name: true,
                src: true
            }
        }], offset, limit);
    }
}

module.exports = ProductsService;