import dotenv from 'dotenv'
dotenv.config()
import express from "express";
import connectDb from "./utils/connectToDb.js";
import certificateRoutes from "./routes/certificate/certificateRoutes.js";
import userRoutes from "./routes/userRoutes/userRoutes.js";
import pdf from "html-pdf";
import fs from "fs";
import cors from "cors";
import cron from "node-cron";
import {
  getAllCertificates,
  updateCertificateController,
} from "./controller/certificate/certificateCotroller.js";
import { updateCertificateService } from "./service/certificateService/certificateService.js";

const app = express();


app.use(cors())
app.use(express.json());
app.use("/certificate", certificateRoutes);
app.use("/user", userRoutes);

var companyNameVar = "Hello, World!";

// cron.schedule("* * * * * *", async () => {
//   let today = new Date();
//   let certificates = await getAllCertificates();
//   // console.log(certificates)

//   certificates.map(async(certificate) =>  {
//     if (certificate.dateExpired < today) {
//      await updateCertificateService({
//         certificateId: certificate._id,
//         status: "expired",
//       });

//       return;
//     }
//   });
// });

// Listen on port 2000
app.listen(4000, async () => {
  // connect to db
  await connectDb();
  console.log("successfully connected to db !!!");
  console.log("listening at http://localhost:4000");
});
