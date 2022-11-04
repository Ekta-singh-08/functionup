const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const commonMW = require ("../middlewares/commonMiddlewares")
const middle = require('../middlewares/middlewaresesson2')
const usercont= require('../controllers/user1Controller')
const productController= require('../controllers/productController')
const orderController= require('../controllers/orderController')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//Can we set the 'next' input parameter in a route handler?
//What is the primary difference between a middleware and a route handler?
router.post("/createBook", commonMW.myMiddleware,BookController.createBook, function(req, res, next){
    res.send("Ending the cycle")
}  )

router.post("/createUser", commonMW.myMiddleware, UserController.createUser)

router.get("/dummy1", commonMW.myOtherMiddleware, UserController.dummyOne)

router.get("/dummy2", commonMW.myOtherMiddleware, UserController.dummyTwo)

router.get("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.mid4, UserController.basicCode)

module.exports = router;
// user Api for creat new user 

router.post("/createUser1",middle.myOtherMiddleware,usercont.createnewUser)
//get DATA from user 
//router.get("/getuserData",usermidcontroller.getUserData)

//product api for creat new product
router.post("/createproduct",productController.createproduct)

//router.post("/creat")
router.post("/createorder",middle.myOtherMiddleware,orderController.createorder)

//router.get("/getorderdata",ordercontroller.getorderdata)
module.exports = router;
