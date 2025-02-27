// this file is the entry of all http calls
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import {
  createCertificateService,
  deleteCertificateByIdService,
  findAllCertificates,
  findCertificateById,
  findCertificateByQuery,
  updateCertificateService,
} from "../../service/certificateService/certificateService.js";


import { nanoid } from "nanoid";
import Certficate from '../../models/Certificate.js';
export const addCerticate = async (req, res) => {
// console.log(req.body)
let certNumber = "SPD" + 10000 +  await Certficate.count();


  // extracting tracking certificate details
  let verificationCode = nanoid(6);
  let trackingCertificateDetails = {
    companyName: req.body.companyName,
    certificateType: req.body.certificateType,
    deviceModel: req.body.deviceModel,
    serialNumber: req.body.serialNumber,
    dateIssued: req.body.issuedOn,
    dateExpired: req.body.dateExpired,
    vehilesMonitored: req.body.vehilesMonitored,
    verificationCode: verificationCode,
    status: req.body.status,
    certificateNumber: certNumber,
    maximumSpeed :req.body.maximumSpeed, 
    vehicleModel:req.body.vehicleModel,
    chassisNumber: req.body.chassisNumber, 
    engineNumber :req.body.engineNumber, 
    bodyType: req.body.bodyType, 
    deviceModel: req.body.deviceModel,
    deviceSerialNumber:req.body.deviceSerialNumber,
    make:req.body.make,
    color:req.body.color,
    dateOfInstallation:req.body.dateOfInstallation
  };
  // pass them to the service
  let certificateCreated = await createCertificateService(
    trackingCertificateDetails
  );
  res.status(200).json(certificateCreated);
};

export const getTrackingById = async (req, res) => {
  let certificateId = req.query.certificateId;
  console.log(certificateId);
  let foundCertificate = await findCertificateById(certificateId);

  return res.status(200).json(foundCertificate);
};

export const getAllCertificates = async (req, res) => {
  try {
    let foundCertificates = await findAllCertificates();
    console.log(foundCertificates)
    return res.json({
      data:foundCertificates
    })
     foundCertificates;
    res.status(200).json({
      success: true,
      message: "certificates found successfully",
      data: foundCertificates,
      length: foundCertificates.length,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};


export const verifyCertificateWeb = async (req, res) => {
  let verificationCode = req.params.verificationCode;

  try {
    let searchCriteria = {
      verificationCode: verificationCode,
    };
    let foundCerticates = await findCertificateByQuery(searchCriteria);

    // in this case the array should have a length of 1
    if (foundCerticates.length != 1) {
      throw Error("Invalid Certicate verification code ");
    }
    //checking the expiry dates
let trackingCert = foundCerticates[0];

if(trackingCert.status == "expired"){
    throw Error ("Certificate Expired On " + trackingCert.dateExpired)
}
let title = "chicken";
    return res.render('main',{name:title});
    
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};
export const verifyCertificate = async (req, res) => {
  let verificationCode = req.params.verificationCode;

  try {
    let searchCriteria = {
      verificationCode: verificationCode,
    };
    let foundCerticates = await findCertificateByQuery(searchCriteria);

    // in this case the array should have a length of 1
    if (foundCerticates.length != 1) {
      throw Error("Invalid Certicate verification code ");
    }
    //checking the expiry dates
let trackingCert = foundCerticates[0];

if(trackingCert.status == "expired"){
    throw Error ("Certificate Expired On " + trackingCert.dateExpired)
}

    return res.status(200).json(foundCerticates);
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};
export const getTrackingCertificateByQuery = async (req, res) => {
  // assuming we want to query by company name

  let passedVerificationCode = req.query.verificationCode;

  let searchQuery = req.query;

  let searchCriteria = {
    verificationCode: passedVerificationCode,
  };
  let foundCerticates = await findCertificateByQuery(searchCriteria);
  return res.status(200).json(foundCerticates);
};
export const deleteCertificateById = async (req, res) => {
  console.log(req.query);
  let certificateId = req.query.certificateId;
  console.log(certificateId);
  let foundCertificate = await deleteCertificateByIdService(certificateId);

  return res.status(200).json(certificateId);
};

export const updateCertificateController = async (req, res) => {
  let newUpdates = req.body;

  let foundCertificate = await updateCertificateService(newUpdates);

  return res.status(200).json(foundCertificate);
};


// getting statistics 
export const getCertificateStatistics = async (req, res) => {
 

  try {

    let totalSLFromDb = await Certficate.find({certificateType:"sl"}).count()
    let totalSMFromDb = await Certficate.find({certificateType:"sm"}).count()
    let totalTRFromDb = await Certficate.find({certificateType:"tr"}).count()

    let desiredRes = {
      totalSL:totalSLFromDb,
      totalSM:totalSMFromDb,
      totalTR:totalTRFromDb

    }
    


    return res.status(200).json(desiredRes);
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};
