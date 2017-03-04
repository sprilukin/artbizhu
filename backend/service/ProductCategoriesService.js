const ProductCategory = require("../models/ProductCategory");
const GenericService = require("./GenericService");

class ProductCategoriesService extends GenericService {
    constructor() {
        super(ProductCategory);
    }

    add(options) {
        console.log(options);
        return Promise.resolve();
    }

    updateById(id, options) {
        console.log(options);
        return Promise.resolve();
    }
}

module.exports = ProductCategoriesService;