const jwt= require('jsonwebtoken')

const auth =async function(req,res,next){

    const header = req.headers["x-auth-token"]
    if(header)
    {
        const decode = await jwt.verify(header,'passwordSignature')
        console.log(decode)
        if(!decode) return res.send({status:false,msg:"invalid token"})
        next()

    }else{
        console.log("x-auth-token key is headrs")
        res.send({msg:"x-auth-token key is required in headers"})

    }
}

module.exports.auth=auth