import VueRouter from "vue-router";
import Vue from "vue";
import $ from "jquery";
import { sync } from "vuex-router-sync";
import navigationUtil from "./util/navigationUtil";

function create(options) {
    let vueRouter = new VueRouter({
        mode: "history",
        routes: options.routes,
        linkActiveClass: "uk-active",
        scrollBehavior (/*to, from, savedPosition*/) {
            return { x: 0, y: 0 };
        }
    });

    vueRouter.beforeEach((to, from, next) => {
        let navItem = navigationUtil.getNavItemByPath(to.path, options.navigation);

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
    sync(options.store, vueRouter);

    return vueRouter;
}

export default {
    create: create
};