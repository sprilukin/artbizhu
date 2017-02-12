<template>
    <div class="uk-margin">
        <input class="uk-input uk-form-width-medium" type="text" placeholder="Product name" v-model="newProductName">
        <button class="uk-button uk-button-primary" v-on:click="addProduct">Add Product</button>
        <router-link to="/products">Go to Products</router-link>
    </div>
</template>

<script>
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
</script>
