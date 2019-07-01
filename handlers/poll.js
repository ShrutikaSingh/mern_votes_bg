//handlers/polls.js

//our handler is going to import database therefore import models
const db=require('../models');


//use async await to show polls,**always use try catch in the async await
exports.showPolls=async(req,res,next) => {
    try{
        const polls= await db.Poll.find(); //find everything
        res.status(200).json(polls)//200 for OK status and show the polls in json format

    }
    catch(err){
        err.status= 400;
        next(err);
    }
};