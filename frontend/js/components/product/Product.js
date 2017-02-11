let Vue = require("vue"),
    template = require("./template/product.html");

module.exports = Vue.extend({
    template: template,
    props: ["product"]
});