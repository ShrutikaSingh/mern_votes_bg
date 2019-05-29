
require('dotenv').config();//create private variables that u dont want to share on a website like github
//create server

const express = require('express');
//const port= 5000;   //
const port= process.env.PORT; //it will take the PORT variable from .env
//check out why env method not working with nodemon but working perfect with node index.js 
const cors=require('cors');
const bodyParser=require('body-parser');

const db=require('./models');    //for mongo db connection
const handle=require('./handlers');  //start listing at /

const routes=require('./routes');
const app=express();

app.use(cors());    //initialise the middle wares that we installed
app.use(bodyParser.json()); //initialise the middle wares body-parser that we installed

app.get('/',(req,res)=>res.json ({hello :'worlds'}));//json object //start listing at /
app.use('/api/auth',routes.auth);//sending all the route for this endpoint here and routes.auth will take care of all the auth





app.use(handle.notFound);   //not found is coming from handler/index.js

//app.use( handle.errors);    //this errorHandler errors is coming from handler/index.js//const port= process.env.PORT; //it will take the PORT variable from .env
//getting error res.status is not a function
app.listen(process.env.PORT || 5000 , console.log(`server is listining to ${port}`)); //``backtick for template literals














