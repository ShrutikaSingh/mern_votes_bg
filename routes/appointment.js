const router=require("express").Router();
const AppointmentModel=require('../models/appointment');

/*
router.get('/testappointment',(req,res) => {
    res.json({
    appointment:'success',
    data:"this is the testing appointment endpoint",
})
}
)
*/

router.route('/').get((req,res)=>{
  AppointmentModel.find()
    .then(summary=>res.json(summary))
    .catch(err=>res.status(400).json('Error is here:'+ err))
});


router.post("/post",(req,res)=>{
    if(!req.body){
        return res.status(400).send("request body is missing");
    }
    let model=new AppointmentModel(req.body)
    model.save()
    .then(()=>res.json('Summary added'))
    .catch(err=> res.status(400).json('Error: '+ err));
})
module.exports=router;