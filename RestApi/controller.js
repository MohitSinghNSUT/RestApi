const connect = require('./models')
const connectdb = require('./app')
const getproducts = async (req, res) => {
    await connectdb
    let data = await connect.find({})
    // To Handle any type of query 
    data = await connect.find(req.query)
    // Here we have implemented the search using regex functionality where if we write (Val-> search for Val.... )
    const queryobj = {};
    let {sort,select}=req.query;
    for (let i in req.query) {
        if(i!="sort" && i!="select" &&i!="page" &&i!="limit"){
            queryobj[i] = { $regex: req.query[i], $options: "i" }
        }
    }
    let newdata = connect.find(queryobj)
    // sort the data on the basis of given data 
    if(sort){
        let sortstring=sort.replace(","," ");
        newdata =  newdata.sort(sortstring)
    } 
    data = await newdata
    // select only that cloumn that is present in select 
    if(select){
        let finalobj=[];
        let arr=select.split(",");
         for(let j=0;j<data.length ;j++){
            let tempobj={};
            tempobj._id=data[j]._id;
            for(let value of arr){
                if(data[j][value]){
                    tempobj[value]=data[j][value]
                }
            }
            finalobj.push(tempobj);
         }
       data=finalobj
    }
    // skip and present only 10 elements
    let limit=Number(req.query.limit)|| 10 ;
    let page=Number(req.query.page)|| 1 ; 
    let skip=(page-1)*limit;
    res.send(data.slice(skip,skip+limit));
}
module.exports = { getproducts }
