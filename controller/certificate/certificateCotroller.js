
// this file is the entry of all http calls

import { createCertificateService } from "../../service/certificateService.js/certificateService.js"

export const addCerticate =   async (req , res) =>{

    let certificateCreated  = await createCertificateService(req.body)
    res.json(certificateCreated)
} 