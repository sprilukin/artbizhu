let ProductList = require("./components/product/ProductList");


var data = {
    products: [
        {name: "a"},
        {name: "a1"},
        {name: "a2"},
        {name: "a3"},
        {name: "a3"},
        {name: "a3"},
        {name: "a3"},
        {name: "a3"},
        {name: "a3"},
        {name: "a3"},
        {name: "a3"},
        {name: "a3"},
        {name: "a3"},
        {name: "a3"},
        {name: "a3"},
        {name: "a3"},
        {name: "a3"},
        {name: "a3"},
        {name: "a3"},
        {name: "a3"}
    ]
};

new ProductList({
    el: "#app",
    data: data
});
