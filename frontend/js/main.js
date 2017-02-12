let ProductList = require("./components/product/ProductList.vue"),
    Vue = require("vue");

new Vue({
    el: "#app",
    extends: ProductList,
    data: {
        newProductName: "",
        products: [
            {name: "a"}
        ]
    }
});