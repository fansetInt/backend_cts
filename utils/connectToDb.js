import mongoose from "mongoose";
 const connectDb = async () =>{
   await  mongoose.connect('mongodb://127.0.0.1:2000/certificate_trackingdb');
}

export default connectDb