const express = require('express')
const router = express.Router()
const db = require('../data/connection')

// get all
router.get("/", (req, res)=>{
    db('cars')
    .then((cars)=> res.status(200).json({data: cars}))
    .catch((error)=> errorHandler(error, res))
})
 
//add a new car
router.post("/", (req, res)=>{
    const newCar = req.body
    db('cars').insert(newCar)
    .then((car)=> res.status(201).json({data: car}))
    .catch((error)=> errorHandler(error, res))
})


//deleting 
router.delete("/:id", accountsIdValidation, (req, res)=>{
    const {id} = req.params
    db('cars').del().where({id})
    .then(count => res.status(204).json({data: count}))
    .catch((error)=> errorHandler(error, res))
})

// updating
router.put("/:id", accountsIdValidation,  (req, res)=>{
    const {id} = req.params
    const updating = req.body

    db('cars').where({id}).update(updating)
    .then(() => {
        db('cars').where({id})
        .first()
        .then(car => res.status(201).json({data: car}))
        .catch((error)=> errorHandler(error, res))
    } )
    .catch((error)=> errorHandler(error, res))
})





// error handler
function errorHandler (error, res) {
    res.status(500).json({errorMessage: error.message})
}

//middle wares
// id validation
function accountsIdValidation (req, res, next){
    const {id} = req.params
    db('cars').where({id})
    .then((account)=> account.length === 0 ? res.status(404).json({message: "Make Sure To Provied The Correct ID"}): next())
    .catch((error)=> errorHandler(error, res))
}



module.exports = router