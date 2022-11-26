import mongoose from 'mongoose'
const Connect=async()=>{
    try{
        mongoose.connect(`mongodb+srv://whatsapp:codeforinterview@whatsapp.fkp9g.mongodb.net/?retryWrites=true&w=majority`);
        console.log("Database connected successfully");

    }
    catch(error){
        console.log(error);
    }

}
export default Connect;