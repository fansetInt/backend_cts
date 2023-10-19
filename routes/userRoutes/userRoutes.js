import { Router } from "express";
import { addUser, getTrackingById ,getTrackingUserByQuery, deleteUserById, updateUserController} from "../../controller/userController/userController.js";
const userRoutes = Router()


userRoutes.post('/',addUser)
userRoutes.get('/' , getTrackingById)
userRoutes.get('/search' , getTrackingUserByQuery)
userRoutes.put('/' , updateUserController)
userRoutes.delete('/' , deleteUserById)

export default userRoutes