<template>
    <router-view v-bind:products="products" v-bind:newProductName="newProductName"></router-view>
</template>

<script>
    let VueRouter = require("vue-router"),
        productList = require("./product/ProductList.vue"),
        addProduct = require("./product/AddProduct.vue"),
        notFound = require("./NotFound.vue");

    module.exports = {
        router: new VueRouter({
            mode: "history",
            routes: [
                {
                    path: "/",
                    component: addProduct,
                    props: true
                },
                {
                    path: "/products",
                    component: productList,
                    props: true
                },
                {
                    path: "*",
                    component: notFound
                }
            ]
        })
    };
</script>
