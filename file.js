const connectdb=require('./app')
const person=require('./models')
const json=require('./jsonfile.json')
const insert=async ()=>{
    // data base dur ha and  galti hamesha hoti h
    try{
        await connectdb
       await person.create(json);
        console.log(`sucess`);
    }
    catch(e){
        console.log(e);
    }
    // other function to be called after it
}
insert();