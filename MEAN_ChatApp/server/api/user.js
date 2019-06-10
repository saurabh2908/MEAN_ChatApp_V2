const express =require("express");
const passport = require("passport");
const url = require('url'); 
const logger = require("../utils/logger");
const routes =express.Router();
const user=require("../db/models/schema");
routes.get('/google',passport.authenticate('google',{scope:['profile','email']}));
routes.get('/dashboard',passport.authenticate('google'),(req,res)=>{
    console.log("request is" ,req);
    let mail =require('../utils/mail');
    // console.log("++++++++++++++++++++++++++",req.user.pic);

    
    logger.debug('Inside google authentication '+req.body);
    // let mail=require("./mail");
    mail("congratulation","Account created,accont has been created",req.user.email,res);
    // res.render('dashboard',{
    //     name:req.user.username,
    //     image:req.user.pic,
    //     email:req.user.email})
    res.redirect(url.format({
        pathname: "/chat.html",
        query: {
        //    "person.username": req.user.displayName,
           "image": req.user.pic,
           
         }
      }));


});

module.exports=routes;