let Vue = require("vue"),
    Product = require("./Product"),
    AddProduct = require("./AddProduct"),
    template = require("./template/productList.html");

module.exports = Vue.extend({
    template: template,

    components: {
        product: Product,
        addProduct: AddProduct
    },

    computed: {
    },

    methods: {

    }
});