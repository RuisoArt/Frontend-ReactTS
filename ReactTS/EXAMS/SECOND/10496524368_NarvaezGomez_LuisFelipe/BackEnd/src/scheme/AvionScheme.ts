import AvionEntity from "../entity/AvionEntity"
import { Schema , Model, model } from "mongoose";

const AvionScheme = new Schema<AvionEntity>({ 
    avionType: {
        type: Number, enum: [1,2,3,4], default: 1
    },
    avionCompany: {
        type: String, required: true, unique: true
    },
    avionAvailability: {
        type: Number, enum: [1,2], default: 1
    },

},{versionKey:false});

export default model("Avion", AvionScheme, "Avion");