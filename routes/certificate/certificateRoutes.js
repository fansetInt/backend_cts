import { Router } from "express";
import { addCerticate, getTrackingById ,getTrackingCertificateByQuery, deleteCertificateById, updateCertificateController, getAllCertificates} from "../../controller/certificate/certificateCotroller.js";
const certificateRoutes = Router()


certificateRoutes.post('/',addCerticate)
certificateRoutes.get('/' , getTrackingById)
certificateRoutes.get('/all' , getAllCertificates)
certificateRoutes.get('/search' , getTrackingCertificateByQuery)
certificateRoutes.delete('/' , deleteCertificateById)
certificateRoutes.put('/' , updateCertificateController)

export default certificateRoutes