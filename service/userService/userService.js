import mongoose from "mongoose";
import User from "../../models/UserModel.js"

export const createUserService = async ( userDetailsObject) =>{
    // saving the document in db
    return await  User.create(userDetailsObject)
}

//function to find crm user byid
export const findUserById = async (userId)  =>{
    return await User.findById(userId)
}

//function to find crm User by query
export const findUserByQuery = async (searchCriteria)  =>{
    return await User.find(searchCriteria)
}
//function to update a User
export const updateUserService = async ( newUpdates) =>{
    let userId = newUpdates.userId
    
    
    const filter = { _id:  new  mongoose.mongo.ObjectId(userId)};
    const update = newUpdates
    
    // `doc` is the document _after_ `update` was applied because of
    // `new: true`
    return await User.findOneAndUpdate(filter, update, {
      new: true
    });
    
    }
//function to delete by id
export const deleteUserByIdService = async(userId)=>{
    return await User.findByIdAndDelete(userId)
}


