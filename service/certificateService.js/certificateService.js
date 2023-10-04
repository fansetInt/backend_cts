import Certficate from "../../models/NewCertModel.js";

export const createCertificateService = async ( certificateObject) =>{
    return Certficate.create(certificateObject)
}