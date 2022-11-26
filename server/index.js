import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser';
import Connect from './database/database.js';
const app=express();
const port='8000'
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({extended:true}))
app.listen(port,()=>{
    try{
        console.log('Server connected successfully');

    }
    catch(error){
        console.log(error);
    }
})
Connect();

