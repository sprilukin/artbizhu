let express = require("express");
let router = express.Router();
let settings = require("../../common/settings");
let profile = require("../../profile");

/* GET home page. */
router.get("/", function(req, res) {
    res.render("index", {
        title: settings.store.name,
        mainAppName: profile.mainAppName
    });
});

module.exports = router;
