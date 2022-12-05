import express from 'express'
import { addUser,getAlluser } from '../controller/UserController.js';
import { addUserEach } from '../controller/chatController.js';

const Router=express.Router();
Router.post('/post/user',addUser);
Router.get('/get/user',getAlluser);
Router.post('/post/user/each',addUserEach);
export default Router;