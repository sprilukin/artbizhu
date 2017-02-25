let mongoose = require("mongoose");
let profile = require("../../profile");

// Use native Node promises
mongoose.Promise = global.Promise;
// connect to MongoDB
let promise = mongoose.connect(`mongodb://localhost/${profile.dbName}`)
    .then(/*() => console.log("connection succesful")*/)
    .catch(/*(err) => console.error(err)*/);

module.exports = promise;