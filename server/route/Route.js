import express from 'express'
import { addUser,getAlluser } from '../controller/UserController.js';

const Router=express.Router();
Router.post('/post/user',addUser);
Router.get('/get/user',getAlluser);
export default Router;