import { Router } from "express";
import { addCerticate } from "../../controller/certificate/certificateCotroller.js";
const authRoutes = Router()


authRoutes.post('/',addCerticate)

export default authRoutes