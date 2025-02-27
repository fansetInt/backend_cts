import mongoose from "mongoose";

const CertificateSchema = new mongoose.Schema({

    companyName:String,
     dateIssued: Date,
     dateExpired:Date,
     vehilesMonitored:[String],
     verificationCode:String,
     status:String,
     certificateType: String,


     // speed limiter additional fields
     maximumSpeed : String, 
     certificateNumber: String,
     vehicleModel:String,
     chassisNumber:String, 
     engineNumber:String , 
     bodyType:String, 
     deviceModel:String,
     deviceSerialNumber:String,
     //additional on the vehicle
     make:String,
     color:String,
     dateOfInstallation:Date
     
    });
   
const Certficate = mongoose.model("Certficate",CertificateSchema);

export default Certficate;