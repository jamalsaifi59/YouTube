// import dotenv from "dotenv"
// import connectDB from "./db/index.js"
// import app from "./app.js"
// dotenv.config({
//     path : './.env'
// })

// connectDB()
// .then(()=>{
//     app.listen(process.env.PORT || 8000, ()=>{
//         console.log(`Server is running at port : ${process.env.PORT}`)
//     })
//     app.on("error",(Error)=>{
//          console.log("ERROR",Error)
//     })
// })
// .catch((err) =>{
//     console.log("MONGODB connection failed !!",err)
// })
require('dotenv').config()
const express = require('express')
const app = express()
const port = 6000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/jamal', (req, res) => {
    res.send('Hello jamal saifi')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})


// import express from "express"
// const app = express()

// (async ()=>{
//     try{
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//        app.on("error", (error)=>{
//         console.log("ERROR",error)
//         throw error
//        })
//        app.listen(process.env.PORT ,()=>{
//         console.log (`App Listen on PORT ${process.env.PORT}`)
//        })
//     }
//     catch(error){
//         console.log("Error",error);
//         throw err
//     }
// }) ()