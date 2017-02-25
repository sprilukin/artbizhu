let express = require("express");
let router = express.Router();
let settings = require("../../common/settings");

/* GET home page. */
router.get("/", function(req, res) {
    res.render("index", {
        title: settings.store.name,
        mainAppName: "main"
    });
});

module.exports = router;
