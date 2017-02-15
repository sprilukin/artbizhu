import App from "./component/App.vue";
import Router from "./router/Router";
import store from "./store/store";
import Vue from "vue";

new Vue({
    el: "#app",
    store: store,
    router: Router,
    render: h => h(App)
});