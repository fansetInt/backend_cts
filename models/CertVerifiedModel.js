import mongoose from "mongoose";

const CertVerifiedSchema = new mongoose.Schema({
    companyname:String,
    authenticationcode:String
    });
   
const CertVerifiedModel = mongoose.model("CertVerified",CertVerifiedSchema);
 
export default CertVerifiedModel;
