"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserScheme = new mongoose_1.Schema({
    nameUser: { type: String, required: true, trim: true },
    emailUser: { type: String, required: true, unique: true, lowercase: true },
    passUser: { type: String, required: true },
    stateUser: { type: Number, enum: [1, 2, 3], default: 1 },
    dateCreated: { type: Date, default: Date.now() },
    idProfile: { type: mongoose_1.Types.ObjectId, ref: "Profile", required: true },
}, { versionKey: false });
exports.default = (0, mongoose_1.model)("User", UserScheme, "User");
