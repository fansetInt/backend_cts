// const express = require("express");
// const app = express();
// const dotenv = require("dotenv");
// const mongoose = require("mongoose");
// const authRoute = require("./routes/auth")

// dotenv.config();
// app.use(express.json());

// mongoose.connect(process.env.MONGO_URL,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
// })
// .then(console.log("Connected to MongoDB"))
// .catch((err)=>console.log(err));

// const storage = multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,req.body.name);
//     },
//     filename:(req,file,cb)=>{
//         cb(null,req.body.name);
//     },
// });

// app.use("/api/auth",authRoute);
// app.use("/api/certVerified",certVerifiedRoute);
// app.use("/api/newCert",newCertRoute);
// app.use("/api/user",userRoute);

// app.listen("5000",()=>{
//     console.log("Backend is running");
// });

// Import the Express library.
import express from 'express';
import  connectDb  from './utils/connectToDb.js';
import UserModel from './models/UserModel.js';
import SignUpModel from './models/SignUpModel.js';
import NewCertModel from './models/NewCertModel.js';
import CertVerifiedModel from './models/CertVerifiedModel.js';

// Initializing the app.
const app = express();

// middleware
app.use(express.json());
// app.use(express.urlencoded());

// Getting the path request and sending the response with text
app.get('/', (req,res) => {
    res.send('Hi,this jamilas backend');
});

app.get("/greet",(req, res) =>{
    res.send("Hello my my server !!!!!");

});

app.post("/user" , async (req, res) =>{

    const userUsername = req.body.username
    const userPassword = req.body.password
    
    // create  a user 
    const newUser = new UserModel({
        username: userUsername,
        password: userPassword
        
    })
    const savedUser =  await newUser.save()
    res.json(savedUser)
})
    
    app.post("/signup" , async (req, res) =>{

        const signupFullname = req.body.fullname
        const signupEmail = req.body.email
        const signupPassword = req.body.password
        const signupConfirmPassword = req.body.confirmpassword
    // create  a signup 
    const newSignup = new SignUpModel({
        fullname: signupFullname,
        email: signupEmail,
        password: signupPassword,
        confirmpassword: signupConfirmPassword
    })
    const savedSignUp =  await newSignUp.save()
    res.json(savedSignUp )
})
    
    app.post("/newcert" , async (req, res) =>{

        const newcertCompanyName = req.body.companyname
        const newcertDateIssued = req.body.dateissued
        const newcertDateExpired = req.body.dateexpired
        const newcertVehicleMonitored = req.body.vehiclesmonitored
    // create  a new certificate
    const newNewCert = new NewCertModel({
        companyname: newcertCompanyName,
        dateissued: newcertDateIssued,
        dateexpired: newcertDateExpired,
        vehiclesmonitored: newcertVehicleMonitored
    })
    const savedNewCert =  await newNewCert.save()
    res.json(savedNewCert)
})
    
    app.post("/certverified" , async (req, res) =>{

        const certverifiedCompanyName = req.body.companyname
        const certverifiedAuthenticationCode = req.body.authenticationcode

    // create  a certification verification 
    const newCertVerified = new CertVerifiedModel({
        companyname: certverifiedCompanyName,
        authenticationcode: certverifiedAuthenticationCode
    })
   const savedCertVerified =  await newCertVerified.save()
    res.json(savedCertVerified)
})



// Listen on port 2000
app.listen(2000,  async() => {
    // connect to db
    await connectDb()
    console.log("successfully connected to db !!!")
    console.log('listening at http://localhost:2000');
});