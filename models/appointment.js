const mongoose= require('mongoose');

const appointmentSchema= new mongoose.Schema({
   
    ap_date:{type:Date,default:Date.now},
    ap_time:{type:String,default:''},
    ap_address:{type:String,default:''},
    phone_num:{type:Number,default:''},
    email:{type:String,default:''},
    inspection_package:{type:String,default:''},
    summary:{type:String,default:''},
})

module.exports = mongoose.model('appointmentModel',appointmentSchema)