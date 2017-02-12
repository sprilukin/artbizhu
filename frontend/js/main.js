let Main = require("./components/Main.vue"),
    store = require("./store/store"),
    Vue = require("vue");

new Vue({
    el: "#app",
    store: store,
    extends: Main
});