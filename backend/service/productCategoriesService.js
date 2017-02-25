const ProductCategory = require("../models/ProductCategory");
const genericServiceFactory = require("./genericServiceFactory");
const productCategoriesService = genericServiceFactory.create(ProductCategory);

module.exports = productCategoriesService;
