let app = require("./app");

let express = require("express");
let path = require("path");
// let favicon = require("serve-favicon");
let logger = require("./logger");
let cookieParser = require("cookie-parser");
let bodyParser = require("body-parser");
let publicFolder = path.join(__dirname, "../../public");

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(logger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

//Static files will be served from /public folder
app.use(express.static(publicFolder));

