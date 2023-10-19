import mongoose from "mongoose";

const CertificateSchema = new mongoose.Schema({
    companyName:String,
     dateIssued: Date,
     dateExpired:Date,
     vehilesMonitored:[String]
    });
   
const Certficate = mongoose.model("Certficate",CertificateSchema);

export default Certficate;