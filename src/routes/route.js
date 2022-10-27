const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createauthor", UserController.createauthor  )

router.get("/getauthor", UserController.getauthor)

router.post("/createBook", UserController.createBook  )

router.get("/getBook", UserController.getBook)

router.get("/search", UserController.search)

router.get("/searchauthor", UserController.searchauthor)

router.get("/Bookprice", UserController.Bookprice)



module.exports = router;