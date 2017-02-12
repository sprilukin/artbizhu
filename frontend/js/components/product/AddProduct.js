let Vue = require("vue"),
    fetch = require("whatwg-fetch").fetch,
    template = require("./template/addProduct.html");

module.exports = Vue.extend({
    template: template,

    props: ["newProductName"],

    computed: {
    },

    methods: {
        addProduct: function(event) {
            fetch("/products", {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify({name: this.newProductName})
            }).then(function(response) {
                response.json().then(function(json) {
                    console.log(json);
                });
            });
        }
    }
});