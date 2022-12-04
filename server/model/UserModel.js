import mongoose from 'mongoose'

const UserSchema=new mongoose.Schema({
    googleId:{
        type:String
    },
    imageUrl:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    givenName:{
        type:String,
        require:true
    },
    familyName:{
        type:String,
        require:true

    }

})
const UserModel=mongoose.model('UserModel',UserSchema)
export default UserModel