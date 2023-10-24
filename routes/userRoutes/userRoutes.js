import express from 'express'
const Router = express.Router()
import {register ,login} from '../../controller/userController/userController.js'



Router.route('/register').post(register)
Router.route('/login').post(login)



export default Router