import mongoose from "mongoose";

const UserSchema = mongoose.Schema({

    Name:{
        type:String,
        required:true,
    }
})