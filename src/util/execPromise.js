"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execPromise = execPromise;
function execPromise(cmd) {
    return new Promise((resolve, reject) => {
        const cp = require("child_process");
        cp.exec(cmd, (err, stdout, stderr) => {
            if (err) {
                reject(err);
            }
            else {
                resolve({ stdout, stderr });
            }
        });
    });
}
//# sourceMappingURL=execPromise.js.map