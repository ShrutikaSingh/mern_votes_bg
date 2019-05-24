const db = require('../models');//before anything we will be needing our database
//so we are using our db that will be asynchronous

//we use diirectly exports instead of module.exports cauz in our handlers/index.js we are actually spreading it out using ...
//so auth.js will be exports  and handlers/index.js will be module.exports

exports.register = async(req,res,next) =>{ //async db , async always uses try catch //this way we will not need to do promises and callbacks
try{
 const user= await db.User.create(req.body);//we need to create user i register since currently our database has no users & we r gonna create user using based on the body of request
 const {id,username}=user;

res.status(201).json({id,username});//200 for default ok //201 means somthing has been created
}
catch(err){
  if(err.code===11000){ //11000 is the error code provided by mongodb for user already exists  
      err.message='sorry, that user already exists';
  }
    next(err);
 }
};

exports.login= async (req,res,next) => {
    try{
    const  user=await db.User.findOne({username : req.body.username}); //for login we actually have to find user for that we are using findone method we actually find the username that matches with the body of request
    //now we have to check if its the correct user
    const {id,username} =user; //destructuring
    const valid= await user.comparePassword(req.body.password); //match the password of the req.body that we get

    if(valid){ //if the valid returns true we will return id and username
        res.json({id,username});
    }
    else{ //if invalid
        throw new Error('invalid username or password')
    }


    }catch(err){
        next(err);
    }
}; //now go to postmane and check post for localhost:5000/api/auth/login
