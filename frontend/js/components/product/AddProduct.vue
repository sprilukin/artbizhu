<template>
    <div class="uk-margin">
        <div>{{ productsCount }}</div>
        <input class="uk-input uk-form-width-medium" type="text" placeholder="Product name" :value="addProductName">
        <button class="uk-button uk-button-primary" v-on:click="addProduct('test')">Add Product</button>
        <router-link to="/products">Go to Products</router-link>
        <productList></productList>
    </div>
</template>

<script>
    let fetch = require("whatwg-fetch").fetch,
        ProductList = require("./ProductList.vue");

    module.exports = {
        components: {
            productList: ProductList
        },

        computed: {
            productsCount: function(state) {
                return this.$store.state.products.length;
            },
            addProductName: function(state) {
                return this.$store.state.addProductName;
            }
        },

        methods: {
            addProduct: function(name) {
                this.$store.commit("addProduct", name);
            }
        }
    }
</script>
