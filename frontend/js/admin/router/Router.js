import VueRouter from "vue-router";
import Vue from "vue";
import $ from "jquery";
import store from "../store/store";
import { sync } from "vuex-router-sync";
import App from "../component/App.vue";
import Home from "../component/home/Home.vue";
import NotFound from "../component/NotFound.vue";

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
    // Close main menu and change title
    Vue.nextTick().then(() => {
        $("body").trigger("click");
    });

    next();
});

Vue.use(VueRouter);
sync(store, vueRouter);

export default vueRouter;