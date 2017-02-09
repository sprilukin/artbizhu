let fs = require("fs"),
    _ = require("lodash");

const PROFILES = {
    DEVELOPMENT: "development",
    PRODUCTION: "production"
};

let profile = {
    name: PROFILES.DEVELOPMENT
};

const localProfilePath = "./.profile.json";
let isProfileFileExists = fs.existsSync(localProfilePath);

if (isProfileFileExists) {
    try {
        profile = JSON.parse(fs.readFileSync(localProfilePath));
    } catch (e) {
        console.log("Invalid './.profile.json' file");
    }
}

profile.name = process.env.NODE_ENV || profile.name;

console.log("Active profile: " + JSON.stringify(profile, null, 2));

module.exports = _.extend(profile, PROFILES);