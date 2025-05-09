const mongoose = require("mongoose")

const formSchema = new mongoose.Schema({
    studentName:{
        type:String,
        required:true
        },
    MobNo:{
        type:Number,
        required:true
    },
    class:{
        type:String,
        required:true
    },
    Address:{
        type:String
    }
    
})

module.exports = mongoose.model("admissionform",formSchema)