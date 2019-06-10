const Usermodel = require("../models/schema");
const userOperation ={
   
    add(object,res){
        Usermodel.create(object,(err)=>{
           if(err){
               console.log("Data is not added due to ", err);
               
           }
           else{
               console.log("user added suucessfully",res);
           }
        })
        
    } , search(object,res){
        
    Usermodel.find(object,(err,doc)=>{
        if(err){
             console.log("error in findind database");
           
        }
        else{
            if(doc.length>0){
               res.status(200).json({doc});
            console.log(doc);
               
              
            }
                else{
                    console.log("can't find");
                   
                   
                }
            
           
        }
   
});

    },
}

module.exports=userOperation;
