import { Schema , Model, model , Types} from "mongoose";

import UserEntity from "../entity/UserEntity";

const UserScheme = new Schema<UserEntity>({ 
    nameUser:{type:String,required:true,trim: true},
    emailUser:{type:String,required:true, unique:true, lowercase:true},
    passUser:{type:String,required:true},
    stateUser:{type:Number,enum:[1,2,3], default:1},
    dateCreated:{type:Date,default:Date.now()},
    idProfile:{type:Types.ObjectId, ref:"Profile", required:true},
},{versionKey:false});

export default model("User", UserScheme, "User");