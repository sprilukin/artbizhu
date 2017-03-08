import store from "../store/store";
import App from "../component/App.vue";
import Home from "../component/home/Home.vue";
import ProductCategoryList from "../component/productCategory/list/ProductCategoryList.vue";
import ProductCategory from "../component/productCategory/edit/ProductCategory.vue";
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
                    path: navigation.all.categories.uri,
                    component: ProductCategoryList,
                    props: (route) => {
                        return {
                            page: Number(route.query.page) || 0
                        };
                    }
                },
                {
                    path: `${navigation.all.categories.uri}/:id`,
                    component: ProductCategory,
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