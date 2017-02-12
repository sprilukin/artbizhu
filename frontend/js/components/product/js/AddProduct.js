let fetch = require("whatwg-fetch").fetch;

module.exports = {
    props: ["newProductName"],

    computed: {
    },

    methods: {
        addProduct: function() {
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
}