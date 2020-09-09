const express = require('express')
const server = express()
const carsRouter = require('./cars/cars-router')
server.use(express.json())

const port = process.env.PORT || 5005

server.get('/', (req, res)=>{
    res.status(200).send(`<h1> API Up And Running </h1>`)
})
server.use("/api/cars", carsRouter)

server.listen(port, ()=>{
    console.log(`Server Listing At Port: ${port}`)
})
