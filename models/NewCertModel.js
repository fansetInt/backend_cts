import mongoose from "mongoose";

const NewCertSchema = new mongoose.Schema({
    companyNamet:String,
     dateissued: Date,
     dateexpired:Date,
     vehiclesMonitored:String
    });
   
const NewCertModel = mongoose.model("NewCert",NewCertSchema);

export default NewCertModel;