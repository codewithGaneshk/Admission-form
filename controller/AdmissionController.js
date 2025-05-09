const Form = require("../model/AdmissionForm")

exports.getForm = async (req,res)=>{
    try {
        const data = await Form.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.postForm = async (req,res)=> {
    try {
        const data = await Form.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.putForm = async (req,res)=>{
    try {
        const data = await Form.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:true,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.deleteForm = async (req,res) =>{
    try {
        const data = await Form.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}