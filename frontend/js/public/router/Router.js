import store from "../store/store";
import App from "../component/App.vue";
import Store from "../component/store/Store.vue";
import Home from "../component/home/Home.vue";
import Info from "../component/info/Info.vue";
import Payment from "../component/payment/Payment.vue";
import Reviews from "../component/reviews/Reviews.vue";
import NotFound from "../component/NotFound.vue";
import navigation from "./navigation";
import routerFactory from "uicommon/router/routerFactory";

let vueRouter = routerFactory.create({
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
                    component: Store,
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
                },
                {
                    path: "/payment",
                    component: Payment,
                    props: true
                },
                {
                    path: "/reviews",
                    component: Reviews,
                    props: true
                }
            ]
        },
        {
            path: "*",
            component: NotFound
        }
    ],
    store: store,
    navigation: navigation.all
});

export default vueRouter;