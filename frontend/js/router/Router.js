import VueRouter from "vue-router";
import Vue from "vue";
import $ from "jquery";
import store from "../store/store";
import { sync } from "vuex-router-sync";
import App from "../component/App.vue";
import Shop from "../component/shop/Shop.vue";
import Home from "../component/home/Home.vue";
import Info from "../component/info/Info.vue";
import NotFound from "../component/NotFound.vue";
import navigationUtil from "./util/navigationUtil";

let vueRouter = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            component: App,
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
                    path: "/info",
                    component: Info,
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
    scrollBehavior (/*to, from, savedPosition*/) {
        return { x: 0, y: 0 };
    }
});

vueRouter.beforeEach((to, from, next) => {
    let navItem = navigationUtil.getNavItemByPath(to.path);

    // Close main menu and change title
    Vue.nextTick().then(() => {
        $("body").trigger("click");

        if (navItem) {
            $("head > title").text(navigationUtil.formatTitle(navItem.name));
        }
    });

    next();
});

Vue.use(VueRouter);
sync(store, vueRouter);

export default vueRouter;