let a = require("./anotherModule");
let fetch = require("whatwg-fetch").fetch;

fetch('/users.html').then(() => console.log(arguments));

console.log(a);