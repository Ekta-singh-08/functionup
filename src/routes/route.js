const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});


router.get('/moives', function (req, res){
    

    console.log("The path params in the request are : ", req.params)
    let moives = ['Rang de basanti', 'The shining', 'Lord of the rings','Batman begins']
    res.send(moives)
})
router.get('/movies/:index', function(req, res){

    console.log("list of movies ." , req.params)

    let  list_of_movies = ['Rang de basanti' , 'The shining' , 'Lord of the rings' ,'batman begins']
    let  indexresult = req.params.index
    res.send(list_of_movies[indexresult])
})

// Example 1 for path params


router.get('/moives/:movies name', function(req, res){
    
    let myParams = req.params

    
    console.log("The path params in the request are : ", myParams)
    
    res.send('The full name is ' + myParams['moives name'] )
})

// Example 2 for path params


router.get('/moives-details:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let moivesname = requestParams.name
    console.log('Name of the movie is ', moivesname)
    res.send('Dummy response')
})

module.exports = router;

router.get('/movies/ekta/:index', function(req, res){

    const  list_of_movies = ["Rang de basanti" , "The shining", "Lord of the rings" , "Batman begins"]
     const index = req.params 

     
     let singh = Object.values(index)
    if(singh >=  list_of_movies.length){
        res.send("valad number ")
} else res.send(list_of_movies[singh])
    
})
router.get('/movies_object', function(req, res){
    console.log("list of movies." , req.params)
    const  list_of_movies_object = [ 
       { "id": 1,"name": "The Shining"}, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }
    ]
       
       
    res.send(list_of_movies_object)
})
router.get('/movies_object/yash/:index', function(req, res){

    const  list_of_movies_object = [ 
        { "id": 1,"name": "The Shining"}, {
         "id": 2,
         "name": "Incendies"
        }, {
         "id": 3,
         "name": "Rang de Basanti"
        }, {
         "id": 4,
         "name": "Finding Nemo"
        }
     ]
     const index = req.params 

     
     let singhh = Object.values(index)
    if(singhh >=  list_of_movies_object.length){
        res.send("valad number ")
} else res.send(list_of_movies_object[--singhh])
    
})
