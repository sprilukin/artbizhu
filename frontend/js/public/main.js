import Main from "./component/Main.vue";
import Router from "./router/Router";
import store from "./store/store";
import Vue from "vue";

new Vue({
    el: "#app",
    store: store,
    router: Router,
    render: h => h(Main)
});