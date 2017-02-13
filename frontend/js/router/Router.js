let VueRouter = require("vue-router"),
    Vue = require("vue"),
    store = require("../store/store"),
    vuexRouterSync = require("vuex-router-sync").sync,
    ProductList = require("../components/product/ProductList.vue"),
    AddProduct = require("../components/product/AddProduct.vue"),
    NotFound = require("../components/NotFound.vue");

let vueRouter = new VueRouter({
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
});

Vue.use(VueRouter);
vuexRouterSync(store, vueRouter);

module.exports = vueRouter;