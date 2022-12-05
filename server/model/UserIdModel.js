import mongoose from 'mongoose'

const IdSchema=new mongoose.Schema({
    senderId:{
        type:String,
        require:true
    },
    recieverId:{
        type:String,
        require:true
    }
})
const userIdModel=mongoose.model('Idmodel',IdSchema);
export default userIdModel;