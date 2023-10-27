import { Router } from "express";
import { addCerticate, getTrackingById ,getTrackingCertificateByQuery, deleteCertificateById, updateCertificateController, getAllCertificates, verifyCertificate, verifyCertificateWeb} from "../../controller/certificate/certificateCotroller.js";
import { verify_user } from "../../middleware/authRequest.js";
const certificateRoutes = Router()


certificateRoutes.post('/', addCerticate)
certificateRoutes.get('/' , getTrackingById)
certificateRoutes.get('/:verificationCode' , verifyCertificate)

certificateRoutes.get('/verify/:verificationCode' , verifyCertificateWeb)
certificateRoutes.get('/all' , getAllCertificates)
certificateRoutes.get('/search' , getTrackingCertificateByQuery)
certificateRoutes.delete('/' , deleteCertificateById)
certificateRoutes.put('/' , updateCertificateController)

export default certificateRoutes