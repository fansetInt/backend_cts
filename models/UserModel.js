import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 16,
      },
    });
   
const UserModel = mongoose.model("User",UserSchema);

export default UserModel;