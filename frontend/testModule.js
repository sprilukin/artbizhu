let a = require("./anotherModule");
let fetch = require("whatwg-fetch").fetch;
let pick = require("lodash/pick");
let Promise = require("promise-polyfill");

fetch("/users.html").then(/*() => console.log(arguments)*/);

pick({});

Promise.resolve({test: "test"}).then(/*(res) => console.log(res)*/);

module.exports = a;
