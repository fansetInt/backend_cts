import mongoose from "mongoose";
import Certficate from "../../models/Certificate.js";

export const createCertificateService = async ( certificateDetailsObject) =>{
    // saving the document in db
    return await  Certficate.create(certificateDetailsObject)
}

//function to find tracking certificate byid
export const findCertificateById = async (certificateId)  =>{
    return await Certficate.findById(certificateId)
}
//function to find tracking certificate by query
export const findCertificateByQuery = async (searchCriteria)  =>{
    return await Certficate.find(searchCriteria)
}
//function to find tracking certificate by query
export const findAllCertificates = async ()  =>{
    return await Certficate.find({})
}
//function to delete by id
export const deleteCertificateByIdService = async(certificateId)=>{
    return await Certficate.findByIdAndDelete(certificateId)
}

//function to update a certificate
export const updateCertificateService = async ( newUpdates) =>{
let certificateId = newUpdates.certificateId


const filter = { _id:  new  mongoose.mongo.ObjectId(certificateId)};
const update = newUpdates

// `doc` is the document _after_ `update` was applied because of
// `new: true`
return await Certficate.findOneAndUpdate(filter, update, {
  new: true
});

}