let a = require("./anotherModule");
let fetch = require("whatwg-fetch").fetch;
// let pick = require("lodash/pick");
let Promise = require("promise-polyfill");
let uikit = require("uikit");
let $ = require("jquery");

fetch("/users.html").then(/*() => console.log(arguments)*/);

//pick({});

console.log($);
console.log(uikit);


Promise.resolve({test: "test"}).then(/*(res) => console.log(res)*/);

module.exports = a;
