let mongoose = require("mongoose");

// Use native Node promises
mongoose.Promise = global.Promise;
// connect to MongoDB
let promise = mongoose.connect("mongodb://localhost/todo-api")
    .then(/*() => console.log("connection succesful")*/)
    .catch(/*(err) => console.error(err)*/);

module.exports = promise;