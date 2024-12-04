const mongoose=require("mongoose")
const schema={
    name:{
        type:String,
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
};
const person=new mongoose.Schema(schema)
newperson=mongoose.model('users',person);
module.exports=newperson