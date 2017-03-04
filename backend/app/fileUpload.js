let multer = require("multer");
let profile = require("../../profile");

module.exports = multer({
    dest: profile.fileUploadPath,
    // preservePath: true,
    limits: profile.fileUploadSize
});
