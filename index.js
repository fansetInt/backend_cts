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

app.set('view engine', 'ejs');
// app.use(bodyParser.urlencoded({extended:true}));

app.use(cors())
app.use(express.json());
app.use("/certificate", certificateRoutes);
app.use("/user", userRoutes);


const PORT = 7340




app.listen(PORT, async () => {
  // connect to db
  await connectDb();
  console.log("successfully connected to db !!!");
  console.log(`listening at http://localhost:${PORT}`);
});
