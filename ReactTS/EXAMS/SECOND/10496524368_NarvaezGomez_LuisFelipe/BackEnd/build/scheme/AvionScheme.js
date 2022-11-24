"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AvionScheme = new mongoose_1.Schema({
    avionType: {
        type: Number, enum: [1, 2, 3, 4], default: 1
    },
    avionCompany: {
        type: String, required: true, unique: true
    },
    avionAvailability: {
        type: Number, enum: [1, 2], default: 1
    },
}, { versionKey: false });
exports.default = (0, mongoose_1.model)("Avion", AvionScheme, "Avion");
