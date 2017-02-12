<template>
    <router-view></router-view>
</template>

<script>
    let VueRouter = require("vue-router"),
        productList = require("./product/ProductList.vue"),
        addProduct = require("./product/AddProduct.vue");

    module.exports = {
        router: new VueRouter({
            routes: [
                {
                    path: "/",
                    component: addProduct
                },
                {
                    path: "/products",
                    component: productList
                }
            ]
        })
    };
</script>
