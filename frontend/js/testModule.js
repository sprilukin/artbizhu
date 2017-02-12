let ProductList = require("./components/product/ProductList");


var data = {
    newProductName: "",
    products: [
        {name: "a"}
    ]
};

new ProductList({
    el: "#app",
    data: data
});
