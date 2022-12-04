import axios from 'axios'

const url="http://localhost:8000"
export const addUser=async(data)=>{
    try{
     const response=await axios.post(`${url}/post/user`,data);
     return response;
    }
    catch(error){
        return error;
    }

}
export const getAllUser=async()=>{
    try{
        const response=await axios.get(`${url}/get/user`);
        return response;

    }
    catch(error){
        return error;
    }

}