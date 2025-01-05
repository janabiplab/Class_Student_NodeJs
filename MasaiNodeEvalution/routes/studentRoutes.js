const express=require('express')
const studentRouter=express.Router()

const Student=require('../models/student')
//for create a new class
studentRouter.post("/api/students",(req,res)=>{
    const {firstName,lastName,email}=req.body
    try{
        const newStudent=Student({firstName,lastName,email})

        newStudent.save()
        res.status(200).json(newStudent)
    }
    catch(error){
        res.status(400).json({error:error.meassge})
    }
})

// for get all class

studentRouter.get("/api/students",(req,res)=>{
    try{
        const allStudents= Student.find()
        res.status(200).json(allStudents)
    }
    catch(error){
        res.status(404).json({error:error.message})
    }
})

//delete a class by id 

studentRouter.delete('/api/students/:id',(req,res)=>{
    const {id}=req.params
    try{
        const deleteStudent=Student.findIdAnddelete(id)
        if (!deleteStudent){
            res.status(400).json({meassge:"student does not found"})
        }
        res.status(200).json({message:"student sucessfully deleted"})

    }catch(error){
        res.status(400).json({error:error.message})
    }
})

//update a class by id 

studentRouter.put("/api/students/:id",(req,res)=>{
    const {firstName,lastName,email}=req.body
    try{
        const newStudent=Student.findByAndUpdate(id, {firstName,lastName,email},{new:true})
        if(!newStudent){
            res.status(400).json({message:"student does not found"})
        }

        res.status(200).json(newStudent)
    }
    catch(error){
        res.status(404).json({error:error.message})
    }
})

module.exports=studentRouter