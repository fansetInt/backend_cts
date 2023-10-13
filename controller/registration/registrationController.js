
// this file is the entry of all http calls

import { createCertificateService, deleteCertificateByIdService, findCertificateById, findCertificateByQuery, updateCertificateService } from "../../service/registrationService/registrationService.js"

export const addCerticate =   async (req , res) =>{

    // extracting tracking certificate details
    let trackingCertificateDetails = {
        "companyName": req.body.companyName,
        "dateIssued":req.body.dateIssued,
        "dateExpired":req.body.dateExpired,
        "vehilesMonitored":req.body.vehilesMonitored
    
    }
    // pass them to the service
    let certificateCreated  = await createCertificateService(trackingCertificateDetails)
    res.status(200).json(certificateCreated)
} 


export const getTrackingById = async (req , res) =>{
    let certificateId = req.query.certificateId
    console.log(certificateId)
    let foundCertificate = await findCertificateById(certificateId)

    return res.status(200).json(foundCertificate)
}

export const getTrackingCertificateByQuery = async (req, res) =>{
    // assuming we want to query by company name

    let passedCompanyName = req.query.companyName

let searchQuery = req.query;


    let searchCriteria = {
        "companyName": passedCompanyName
    }
    let foundCerticates = await findCertificateByQuery(searchCriteria)
    return res.status(200).json(foundCerticates)

}
export const deleteCertificateById = async(req,res)=>{
    console.log(req.query)
    let certificateId = req.query.certificateId
    console.log(certificateId)
    let foundCertificate = await deleteCertificateByIdService(certificateId)

    return res.status(200).json(certificateId)
}

export const updateCertificateController = async(req,res)=>{
    
    let newUpdates = req.body

    let foundCertificate = await updateCertificateService(newUpdates)

    return res.status(200).json(foundCertificate)
}