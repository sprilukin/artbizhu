import VueRouter from "vue-router";
import Vue from "vue";
import $ from "jquery";
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
                    props: (route) => {
                        return {
                            page: Number(route.query.page) || 0
                        };
                    }
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
    linkActiveClass: "uk-active",
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 };
    }
});

vueRouter.beforeEach((to, from, next) => {
    // Close main menu
    Vue.nextTick().then(() => $("body").trigger("click"));

    next();
});

Vue.use(VueRouter);
sync(store, vueRouter);

export default vueRouter;