const express=require('express');
const logger = require("../utils/logger");

const Route = express.Router();
Route.post('/addUser',(req,res)=>{
         const json = req.body;
         const addCrud =require("../db/helpers/userCrud")
         addCrud.add(json,res);
})
Route.post('/joinUser',(req,res)=>{
    const json = req.body;
    const addCrud =require("../db/helpers/userCrud")
    addCrud.add(json,res);
})
Route.post('/messageUser',(req,res)=>{
    const json = req.body;
    const addCrud =require("../db/helpers/userCrud")
    addCrud.add(json,res);
})
Route.post('/RegisterUser',(req,res)=>{
    const json = req.body;
    const addCrud =require("../db/helpers/userCrud")
    addCrud.add(json,res);
})
Route.post('/Register',(req,res)=>{
    const json = req.body;
    const addCrud =require("../db/helpers/userCrud")
    addCrud.search(json,res);
//     // logger.debug("json is " ,res);
    
// })


// Route.get("/get",(req,res)=>{
//     const addCrud =require("../db/helpers/userCrud");
 
   
//       addCrud.search(res);
//       console.log("++++++++++++++++++++++++++++++++=",res);
//      logger.debug("data is " ,res);

// })

})

module.exports=Route;