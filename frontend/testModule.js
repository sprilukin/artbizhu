let a = require("./anotherModule");
let fetch = require("whatwg-fetch").fetch;
let _ = require("lodash");

fetch('/users.html').then(() => console.log(arguments));

_.pick({});

console.log(a);