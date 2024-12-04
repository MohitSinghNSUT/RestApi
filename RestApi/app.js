require('dotenv').config(); 
const mongoose=require("mongoose")
const uri=process.env.Url
mongoose.connect(uri)
  .then(() => console.log('MongoDB connected successfully!'))
  .catch(err => console.error('MongoDB connection error:', err));

db=mongoose.connection
db.on('connected',()=>{
    console.log('connected');
})
module.exports=db;