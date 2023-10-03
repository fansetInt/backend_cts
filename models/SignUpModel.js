import mongoose from "mongoose";

const SignUpSchema = new mongoose.Schema({
    fullname:String,
    email:String,
    password:String,
    confirmpassword:String
    });
   
const SignUpModel = mongoose.model("SignUp",SignUpSchema);

export default SignUpModel;
