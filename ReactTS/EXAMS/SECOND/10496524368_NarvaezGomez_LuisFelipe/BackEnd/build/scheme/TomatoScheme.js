"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TomatoScheme = new mongoose_1.Schema({
    tomatoName: {
        type: String, required: true, unique: true
    },
    tomatoStateOne: {
        type: Number, enum: [1, 2, 3], default: 1
    },
    tomatoStateTwo: {
        type: Number, enum: [1, 2, 3], default: 1
    }
}, { versionKey: false });
exports.default = (0, mongoose_1.model)("Tomato", TomatoScheme, "Tomato");
