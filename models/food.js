const mongoose=require('mongoose');

//creating food schema 
const foodSchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true
    },
    price:{
        type:Number,
        min:0
    },
    desc:{
        type:String,
        trim:true
    }
})

//formation of model 
const Food = mongoose.model('Food',foodSchema)
module.exports=Food;