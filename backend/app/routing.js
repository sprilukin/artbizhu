let app = require("./app");

let index = require("../routes/index");
let todos = require("../routes/rest/todos");
let products = require("../routes/rest/products");

app.use("/", index);

// REST
app.use("/todos", todos);
app.use("/products", products);