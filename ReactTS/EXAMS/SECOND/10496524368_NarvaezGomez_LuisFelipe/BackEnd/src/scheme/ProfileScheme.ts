import { Schema , Model, model } from "mongoose";

import ProfileEntity from "../entity/ProfileEntity";

const ProfileScheme = new Schema<ProfileEntity>({ 
    profileName:{
        type:String,
        required:true,
        unique:true
    },
    profileState:{
        type:Number,
        enum:[1,2,3],
        default: 1
    }
},{versionKey:false});

export default model("Profile", ProfileScheme, "Profile");