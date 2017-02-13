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
        mapState = require("vuex").mapState,
        mapActions = require("vue").mapActions,
        ProductList = require("./ProductList.vue");

    module.exports = {
        components: {
            productList: ProductList
        },

        computed: Object.assign({}, mapState({
                productsCount: (state) => state.products.length,

                addProductName: (state) => state.addProductName
            })
        ),

        methods: {
            addProduct: function(name) {
                this.$store.dispatch("addProduct", name);
            }
        }
    }
</script>
