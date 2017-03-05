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

function removeFile(file, rejectOnFail = true) {
    return new Promise((resolve, reject) => {
        fs.unlink(file, function(ex) {
            if (ex) {
                if (rejectOnFail) {
                    reject(ex);
                } else {
                    console.error(ex);
                    resolve();
                }
            } else {
                resolve();
            }
        });
    });
}

function removeFiles(files, rejectOnFail = true) {
    let promises = files.map((file) => removeFile(file, rejectOnFail));

    return Promise.all(promises);
}

function getExtensionByMimeType(mimeType) {
    return mimeType.split("\/")[1];
}

module.exports = {
    renameFile: renameFile,
    renameFiles: renameFiles,
    removeFile: removeFile,
    removeFiles: removeFiles,
    getExtensionByMimeType: getExtensionByMimeType
};