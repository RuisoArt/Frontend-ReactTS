"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const conecctionDB = () => {
    const URL = String(process.env.URL_MONGODB);
    (0, mongoose_1.connect)(URL)
        .then(() => {
        console.log("loading mongoDB: ", URL);
    })
        .catch((myError) => {
        console.log("Exit Error: ", myError);
    });
};
exports.default = conecctionDB;
