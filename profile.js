/* eslint no-console: "off" */

let fs = require("fs"),
    _ = require("lodash");

const PROFILES = {
    DEVELOPMENT: JSON.parse(fs.readFileSync("./profile/development.json")),
    PRODUCTION: JSON.parse(fs.readFileSync("./profile/production.json"))
};

let profile = PROFILES.DEVELOPMENT;

const localProfilePath = "./.profile.json";
let isProfileFileExists = fs.existsSync(localProfilePath);

if (isProfileFileExists) {
    try {
        profile = _.extend(profile, JSON.parse(fs.readFileSync(localProfilePath)));
    } catch (e) {
        console.log("Invalid './.profile.json' file");
    }
}

profile.name = process.env.NODE_ENV || profile.name;
profile.watch = process.env.WATCH || profile.watch;
profile.port = process.env.PORT || profile.port;
profile.cache = process.env.CACHE || profile.cache;

console.log("Active profile: " + JSON.stringify(profile, null, 2));

let profiles = Object.keys(PROFILES).reduce(function(memo, key) {
    memo[key] = PROFILES[key].name;
    return memo;
}, {});

module.exports = _.extend(profile, profiles);