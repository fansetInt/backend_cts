
import express from 'express';
import  connectDb  from './utils/connectToDb.js';
import certificateRoutes from './routes/certificate/certificateRoutes.js';
import userRoutes from './routes/userRoutes/userRoutes.js'
import pdf from "html-pdf";
import fs from "fs";
import cors from "cors";


const app = express();

app.use(express.json());
app.use("/certificate" ,certificateRoutes)
app.use("/user" ,userRoutes)

var companyNameVar = "Hello, World!";

app.post('/generate-pdf', (req, res) => {
  const {companyName,dateIssued,expirationDate,vehicleMonitored} = req.body;
  console.log("Company Name :" +companyName+"\nDate Issued :" +dateIssued,+"\nEXpiration Date :" +expirationDate+"\nVehicle Monitored :" +vehicleMonitored);
//   const paragraph = document.getElementById("companyName");
  
  const filePath = './myhtml.html';

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading HTML file');
      return;
    }

    const html = data;

    pdf.create(html).toBuffer((err, buffer) => {
      if (err) {
        console.error('Error generating PDF:', err);
        res.status(500).send('Error generating PDF');
      } else {
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=generated-pdf.pdf');
        res.send(buffer);
      }
    });
  });
});  

// Listen on port 2000
app.listen(2000,  async() => {
    // connect to db
    await connectDb()
    console.log("successfully connected to db !!!")
    console.log('listening at http://localhost:2000');
});