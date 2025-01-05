
const mongoose=require('mongoose')

const classSchama=mongoose.Schema({
   name:{
    type:String,
    required:true
   },
   subject:{
    type:String,
    required:true
   },
   teacherName:{
    type:String,
    required:true
   },

   startDate:{
    type:Date,
    required:true
   },
   endDate:{
    type:Date,
    required:true
   }



})

const Class=mongoose.model('Class',classSchama)

module.exports=Class