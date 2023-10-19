import { createUserService, deleteUserByIdService, findUserById, findUserByQuery, updateUserService } from "../../service/userService/userService.js"

export const addUser =   async (req , res) =>{

    // extracting tracking user details
    let trackingUserDetails = {
        "username": req.body.username,
        "password":req.body.password,
    
    }
    // pass them to the service
    let userCreated  = await createUserService(trackingUserDetails)
    res.status(200).json(userCreated)
} 


export const getTrackingById = async (req , res) =>{
    let userId = req.query.userId
    console.log(userId)
    let foundUser = await findUserById(userId)

    return res.status(200).json(foundUser)
}

export const getTrackingUserByQuery = async (req, res) =>{
    // assuming we want to query by company name

    let passedUsername = req.query.username

let searchQuery = req.query;


    let searchCriteria = {
        "username": passedUsername
    }
    let foundUser = await findUserByQuery(searchCriteria)
    return res.status(200).json(foundUser)

}
export const updateUserController = async(req,res)=>{
    
    let newUpdates = req.body

    let foundUser = await updateUserService(newUpdates)

    return res.status(200).json(foundUser)
}
export const deleteUserById = async(req,res)=>{
    console.log(req.query)
    let userId = req.query.userId
    console.log(userId)
    let foundUser = await deleteUserByIdService(userId)

    return res.status(200).json(userId)
}

