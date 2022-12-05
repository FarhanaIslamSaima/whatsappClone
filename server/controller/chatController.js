import userIdModel from "../model/UserIdModel.js";

export const addUserEach=async(request,response)=>{
    try{
        let exist=await userIdModel.findOne({senderId:request.body.senderId,recieverId:request.body.recieverId});
        if(exist){
            response.status(200).json('User Already exist')
            return
        }
        else{
            const newUserIdModel=new userIdModel(request.body);
            await newUserIdModel.save();
            response.status(200).json(request.body);

        }
      

    }
    catch(error){
        response.status(500).json(error);
    }
}