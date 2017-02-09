/* eslint no-console: "off" */

// profile resultion precedence (from high to low):
// env -> <[profile].json | .profile.json> ->  development.json -> default.json
// where [profile] resolved from NODE_ENV

let fs = require("fs"),
    profiles = require("./profiles"),
    environmentProfile = require("./profiles/environment");

// get profile name from NODE_ENV
let profile = profiles.development;

const localProfilePath = "./.profile.json";
let isProfileFileExists = fs.existsSync(localProfilePath);

if (isProfileFileExists) {
    try {
        profile = Object.assign(profile, JSON.parse(fs.readFileSync(localProfilePath)));
    } catch (e) {
        console.log("Invalid './.profile.json' file");
    }
}

profile = profiles[process.env.NODE_ENV] || profile;

profile = Object.assign(profile, environmentProfile);

console.log("Active profile: " + JSON.stringify(profile, null, 2));

module.exports = profile;