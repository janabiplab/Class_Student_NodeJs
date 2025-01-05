const express=require('express')
const classRouter=express.Router()

const Class=require('../models/classes')
//for create a new class
classRouter.post("/api/classes",(req,res)=>{
    const {name,subject,teacherName,startDate,endDate}=req.body
    try{
        const newClass=Class({name,subject,teacherName,startDate,endDate})

        newClass.save()
        res.status(200).json(newClass)
    }
    catch(error){
        res.status(400).json({error:error.meassge})
    }
})

// for get all class

classRouter.get("/api/classes",(req,res)=>{
    try{
        const allClasses= Class.find()
        res.status(200).json(allClasses)
    }
    catch(error){
        res.status(404).json({error:error.message})
    }
})

//delete a class by id 

classRouter.delete('/api/classes/:id',(req,res)=>{
    const {id}=req.params
    try{
        const deleteClass=Class.findIdAnddelete(id)
        if (!deleteClass){
            res.status(400).json({meassge:"Class does not found"})
        }
        res.status(200).json({message:"class sucessfully deleted"})

    }catch(error){
        res.status(400).json({error:'user not found'})
    }
})

//update a class by id 

classRouter.put("/api/classes/:id",(req,res)=>{
    const {name,subject,teacherName,startDate,endDate}=req.body
    try{
        const newClass=Class.findByandUpdate(id, {name,subject,teacherName,startDate,endDate},{new:true})
        if(!newClass){
            res.status(400).json({message:"Class does not found"})
        }

        res.status(200).json(newClass)
    }
    catch(error){
        res.status(404).json({error:error.message})
    }
})

module.exports=classRouter