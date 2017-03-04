const fs = require("fs");

function renameFile(oldName, newName) {
    return new Promise((resolve, reject) => {
        fs.rename(oldName, newName, function(ex) {
            if (ex) {
                reject(ex);
            } else {
                resolve();
            }
        });
    });
}

function renameFiles(files) {
    let promises = files.map((file) => renameFile(file.oldName, file.newName));

    return Promise.all(promises);
}

module.exports = {
    renameFile: renameFile,
    renameFiles: renameFiles
};