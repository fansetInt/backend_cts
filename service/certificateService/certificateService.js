import Certficate from "../../models/NewCertModel.js";

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
//function to delete by id
export const deleteCertificateByIdService = async(certificateId)=>{
    return await Certficate.findByIdAndDelete(certificateId)
}