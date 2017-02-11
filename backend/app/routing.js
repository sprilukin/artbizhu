let app = require("./app");

let index = require("../routes/index");
let todos = require("../routes/todos");
let products = require("../routes/products");

app.use("/", index);
app.use("/todos", todos);
app.use("/products", products);