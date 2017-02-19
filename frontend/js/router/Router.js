import VueRouter from "vue-router";
import Vue from "vue";
import store from "../store/store";
import { sync } from "vuex-router-sync";
import MainLayout from "../component/layout/MainLayout.vue";
import Shop from "../component/shop/Shop.vue";
import Home from "../component/home/Home.vue";
import AddProduct from "../component/shop/AddProduct.vue";
import NotFound from "../component/NotFound.vue";

let vueRouter = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            component: MainLayout,
            props: true,
            children: [
                {
                    path: "",
                    component: Home,
                    props: true
                },
                {
                    path: "/store",
                    component: Shop,
                    props: true
                },
                {
                    path: "/addProduct",
                    component: AddProduct,
                    props: true
                }
            ]
        },
        {
            path: "*",
            component: NotFound
        }
    ],
    linkActiveClass: "uk-active"
});

Vue.use(VueRouter);
sync(store, vueRouter);

export default vueRouter;