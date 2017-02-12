let main = require("./components/main.vue"),
    Vue = require("vue"),
    VueRouter = require("vue-router");

Vue.use(VueRouter);

new Vue({
    el: "#app",
    extends: main,
    data: {
        newProductName: "",
        products: [
            {name: "a"}
        ]
    }
});