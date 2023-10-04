import mongoose from "mongoose";
// password should have a minimun of 3 characters

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true,
        unique:true
    },
    password: {
        type:String,
    }
    });
   
const UserModel = mongoose.model("User",UserSchema);

export default UserModel;