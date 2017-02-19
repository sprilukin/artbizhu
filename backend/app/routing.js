let app = require("./app");

let index = require("../routes/index");
let products = require("../routes/rest/products");

app.use("/", index);

// REST
app.use("/api/products", products);