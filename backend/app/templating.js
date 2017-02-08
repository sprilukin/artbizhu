let app = require("./app");
let path = require("path");
let ejs = require("ejs");
let viewsFolder = path.join(__dirname, "../views");

// view engine setup
app.set("views", viewsFolder);
app.engine("html", ejs.renderFile);
// app.set("view engine", "ejs");
app.set("view engine", "html");
app.set('view cache', true);
