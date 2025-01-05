const express=require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const classRoutes=require('./routes/classRoutes')
const studentRoutes=require('./routes/studentRoutes')

const app=express()
app.use(express.json())

dotenv.config()

//connect to the mongoDb
 mongoose.connect('process.env.MONGODB_URL',{
    useNewUrlParser:true,
    useUnifiedTopology:true
 })
 .then(()=>{
    console.log("Connected to the MongoDB")
 })

 .catch((error)=>{
    console.log("error in connect to the mongoDb",error)
 })


app.listen(3000,async()=>{
    console.log("Server is running on http://localhost/:3000")
})