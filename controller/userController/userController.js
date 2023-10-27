import User from "../../models/UserModel.js";
import { get_signed_token } from "../../utils/getsingedtoken.js";

export const register = async (req, res) => {
  const { firstname, lastname, username ,companyname, email, password,phone,address } = req.body;
console.log(phone,address)
  try {
    const user = await User.create({
      firstname,
      lastname,
      username,
      companyname,
      email,
      password,
      phone,
      address,
      balance :"0.0"
    });
    res.json({
        success:true,
        "token": await get_signed_token(user)

    }).status(200)
  } catch (error) {
      console.log(error)
      res.json({
          success:false,
          "message":error.message
      }).status(201);
      return

  }

};

export const login = async (req,res) =>{
    console.log("......................................................")
    const {email, password} = req.body
    console.log(req.body)
    
    if(!email && !password){
        res.json({
            success:false,
            "message":"please provide email and password"
        }).status(404)
        return;

    }
    try {
        //1 check if the useremail  is in the database
        const user =  await User.findOne({email}).select("+password");

        
        // check if the user exist
        if(!user){
            res.json({
                success:false,
                "message":"User with that details not found"
            }).status(401)
            return;
        }
        // check if the passsword match
        if(user.password != password){
            res.json({
                success:false,
                "message":"Provide correct password"
            }).status(401)
            return;

        }

        // if all tests have passed then success
        res.json({
            success:true,
            "token":await get_signed_token(user)
        })

        
    } catch (error) {
        console.log(error)
        res.json({
            "success":"false",
            "message":error.message

        });
        return;
        
    }
}