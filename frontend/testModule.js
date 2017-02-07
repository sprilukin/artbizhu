let a = require("./anotherModule");
let fetch = require("fetch");

console.log("fetch:", fetch);
console.log("fetch.fetch:", fetch.fetch);

fetch('/users.html').then(() => console.log(arguments));

console.log(a);