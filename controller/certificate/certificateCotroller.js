
// this file is the entry of all http calls

import { createCertificateService, deleteCertificateByIdService, findAllCertificates, findCertificateById, findCertificateByQuery, updateCertificateService } from "../../service/certificateService/certificateService.js"

import { nanoid } from "nanoid"
export const addCerticate =   async (req , res) =>{

    // extracting tracking certificate details
    let verificationCode = nanoid(6);
    let trackingCertificateDetails = {
        "companyName": req.body.companyName,
        "dateIssued":req.body.dateIssued,
        "dateExpired":req.body.dateExpired,
        "vehilesMonitored":req.body.vehilesMonitored,
        "verificationCode":verificationCode,
        "status":req.body.status
    
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

export const getAllCertificates = async (req , res) =>{
try {
    let foundCertificates = await findAllCertificates();
    return foundCertificates;
     res.
    status(200).
    json(
        {
            success:true,
            "message":"certificates found successfully",
            data: foundCertificates,
            "length":foundCertificates.length
        }
        )
    
} catch (error) {
    return res.
    status(404).
    json(
        {
            success:false,
            "message":error.message,
            data: null
        }
        )

}

}
export const getTrackingCertificateByQuery = async (req, res) =>{
    // assuming we want to query by company name

    let passedVerificationCode = req.query.verificationCode

let searchQuery = req.query;


    let searchCriteria = {
        "verificationCode": passedVerificationCode
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