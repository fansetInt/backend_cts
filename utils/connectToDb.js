import mongoose from "mongoose";
 const connectDb = async () =>{
   await  mongoose.connect('mongodb+srv://fambaclient:famba@cluster0.ozz0q.mongodb.net/certificate?retryWrites=true&w=majority');
  //  await  mongoose.connect('mongodb://127.0.0.1:27017/certificate_trackingdb');
}

export default connectDb