import UserModel from "../model/UserModel.js";


export const addUser=async(req,response)=>{
    try{
        let exist=await UserModel.findOne({googleId:req.body.googleId});
        if(exist){
            response.status(200).json("User already exist")
            return 
        }
     
            const newUser=new UserModel(req.body);
            await newUser.save();
           response.status(200).json(req.body);
           console.log(req.body);

 
    
    }
    catch(error){
        response.status(500).json(error);
        console.log(error)
    }
}
export const getAlluser=async(request,response)=>{
    try{
        const User=await UserModel.find();
          response.status(200).json(User);
    }
    catch(error){
        response.status(500).json(error);
    }
}