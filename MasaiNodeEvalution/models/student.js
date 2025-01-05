const mongoose=require('mongoose')

const studentSchama=mongoose.Schema({
    firstName:{
        type:string,
        required:true

    },
    lastName:{
        type:string,
        required:true
    },
    email:{
        type:string,
        required:true
    }
})

const Student=mongoose.model("Student",studentSchama)

module.exports=Student