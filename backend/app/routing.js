let app = require("./app");

let index = require("../routes/index");
let products = require("../routes/rest/products");
let productCategories = require("../routes/rest/productCategories");

app.use("/", index);

// REST
app.use("/api/products", products);
app.use("/api/productCategories", productCategories);