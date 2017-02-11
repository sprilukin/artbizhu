let Vue = require("vue"),
    Product = require("./Product"),
    template = require("./template/productList.html");

module.exports = Vue.extend({
    template: template,

    components: {
        product: Product
    },

    computed: {
    },

    methods: {

    }
});