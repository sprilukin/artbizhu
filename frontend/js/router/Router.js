import VueRouter from "vue-router";
import Vue from "vue";
import store from "../store/store";
import { sync } from "vuex-router-sync";
import ProductList from "../component/product/ProductList.vue";
import AddProduct from "../component/product/AddProduct.vue";
import NotFound from "../component/NotFound.vue";

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
sync(store, vueRouter);

export default vueRouter;