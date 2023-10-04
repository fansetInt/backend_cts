
import express from 'express';
import  connectDb  from './utils/connectToDb.js';
import certificateRoutes from './routes/certificate/certificateRoutes.js';

const app = express();

app.use(express.json());
app.use("/certificate" ,certificateRoutes)

// Listen on port 2000
app.listen(2000,  async() => {
    // connect to db
    await connectDb()
    console.log("successfully connected to db !!!")
    console.log('listening at http://localhost:2000');
});