import mongoose from "mongoose";

const NewCertSchema = new mongoose.Schema({
    companyName:String,
     dateIssued: Date,
     dateExpired:Date,
     vehilesMonitored:[String]
    });
   
const Certficate = mongoose.model("Certficate",NewCertSchema);

export default Certficate;