const jwt = require("jsonwebtoken")

async function auth(req,res,next) {
    try {
       const token = await req.header("auth-token")
       const veryfyToken = await jwt.verify(token,process.env.SEC)
       if(!veryfyToken) return res.json({errors:true,message:"Token is invalid"})
        next()
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
        
    }
}

module.exports = auth