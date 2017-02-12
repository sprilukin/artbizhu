<template>
    <router-view></router-view>
</template>

<script>
    let VueRouter = require("vue-router"),
        Vue = require("vue"),
        ProductList = require("./product/ProductList.vue"),
        AddProduct = require("./product/AddProduct.vue"),
        NotFound = require("./NotFound.vue");

    Vue.use(VueRouter);

    module.exports = {
        router: new VueRouter({
            mode: "history",
            routes: [
                {
                    path: "/",
                    component: AddProduct,
                    props: true
                },
                {
                    path: "/products",
                    component: ProductList,
                    props: true
                },
                {
                    path: "*",
                    component: NotFound
                }
            ]
        })
    };
</script>
