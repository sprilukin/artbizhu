let app = require("./app");

let index = require("../routes/index");
let todos = require("../routes/rest/todos");
let products = require("../routes/rest/products");

app.use("/", index);

// REST
app.use("/api/todos", todos);
app.use("/api/products", products);