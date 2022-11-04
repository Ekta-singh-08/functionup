const { isValidObjectId} = require('mongoose')

/*const newmiddleware = function(req,res,next){
    const body = req.body
    const headers = req.headers
    const freeUser  = headers.isfreeappuser

    if(freeUser){
        console.log("free app User is present")
        next()
    }
    else{
        console.log("free app User is not present")

        return res.send({data : "free App user Is required"})
    }

}
const middlewareorder = function(req,res,next){
    let userId = req.body.userId
    let productId = req.body.productId

    if(!isValidObjectId(userId)){
        return res.send({msg: "not valid userId"})
    }
    if(isValidObjectId(productId)){
        return res.send({msg: "not a valid productId"})
    }
    next()
}*/
const myOtherMiddleware = function(req, res, next){
    let header =req.headers.isfreeappuser
     const newHeader = header=="true" ? true :false
     const isFreeAppUser = req.isFreeAppUser=newHeader
     
    if(header)
    {
     console.log("your header is added successfully")
     next()
    }
    else
    {
     console.log("set your header isfreeappuser is required")
     res.send({headermsg:"request is missing a mandatory header"})
    }
    
 }
///module.exports.newmiddleware = newmiddleware
//module.exports.middlewareorder= middlewareorder
module.exports.myOtherMiddleware=myOtherMiddleware