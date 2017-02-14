let App = require("./components/App.vue"),
    Router = require("./router/Router"),
    store = require("./store/store"),
    Vue = require("vue");

new Vue({
    el: "#app",
    store: store,
    router: Router,
    render: h => h(App)
});