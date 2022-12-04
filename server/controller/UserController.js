import UserModel from "../model/UserModel.js";


export const addUser=async(req,response)=>{
    try{
        let exist=UserModel.findOne({googleId:req.body.googleId});
        if(exist){
            response.status(200).josn("User already exist")
        }
        else{
            const newUser=new UserModel(req.body);
            newUser.save();
           response.status(200).json(req.body);
           console.log(req.body);

        }
    
    }
    catch(error){
        response.status(500).json(error);
    }
}