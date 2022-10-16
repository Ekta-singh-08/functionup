const express = require('express');
const router = express.Router();///test-you
//importing a custom module
const xyz = require('../logger')
//importing external package

const  first = require('../logger/loggr.js')
const scc = require('../util/helper')
const str = require('../validator/formatter.js')
const lodash = require('lodash');
const underscore = require('underscore');
router.get('/test-me', function (req, res) {
    //Calling the components of a different custom module
    console.log("Calling my function ",xyz.myFunction())
    console.log("The value of the constant is ",xyz.myUrl)

    console.log("result of welcom",first.welcome())
    // lowercase module
    console.log("string is converted to lowercase",str.getLowercase())
    // uppercase module
    console.log("string is converted in uppercase",str.getUppercase())
    // trim module
    console.log("The trim of string is",str.gettrim())
    //Trying to use an external package called underscore
    let myArray = ['Akash', 'Pritesh', 'Sabiha']
    let result = underscore.first(myArray)
    console.log("The result of underscores examples api is : ", result)
    //2 module
    console.log("util solution is",scc.info)
    console.log("Today date is",scc.gettoday())
    console.log("month is",scc.getMonth())
// lodash solutions
let monthsname = ["jan","feb","mar","apr","may","june","july","aug","sept","oct","nov","dec"]
// chunk

let res2=lodash.chunk(monthsname,3)
console.log(res2)

// tail
let odd = [1,3,5,7,9,11,13,15,17,19]
let add = lodash.tail(odd)
console.log(add)

// union
let oudi = [1,4,5,9,8,4,5,6,3,1]

let car = lodash.union(oudi)
console.log(car)

// frompair
let data =  [ ["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"] ]
 let resdata= lodash.fromPairs(data)
 console.log(resdata)






    res.send('My first ever api!')

    //To be tried what happens if we send multiple response
    //res.send('My second api!')
});

module.exports = router;

