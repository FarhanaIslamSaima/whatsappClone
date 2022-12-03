export const addUser=async(req,response)=>{
    try{
       response.status(200).json(req.body);
    }
    catch(error){
        response.status(500).json(error);
    }
}