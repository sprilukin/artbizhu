let fs = require("fs");

let defaultProfile = JSON.parse(fs.readFileSync(__dirname + "/default.json"));

module.exports = {
    development: Object.assign({}, defaultProfile, JSON.parse(fs.readFileSync(__dirname + "/development.json"))),
    production: Object.assign({}, defaultProfile, JSON.parse(fs.readFileSync(__dirname + "/production.json")))
};
