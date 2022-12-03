import express from 'express'
import { addUser } from '../controller/UserController.js';

const Router=express.Router();
Router.post('/post/user',addUser);
export default Router;