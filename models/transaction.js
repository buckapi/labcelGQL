const mongoose = require("mongoose");
const Schema =mongoose.Schema;
const TransactionSchema= Schema({
  
    description:{
        type:String,
        require:true,
    },
    amount:{
        type:Number,
        require:true,
    },
    ref:{
        type:String,
        require:true,
        trim:true,
        unique:true,
    },
    status:{
        type:String,
        trim:true,
    },
    type:{
        type:String,
        trim:true,
    }, 
    items:{
        type:[String],
    },
    discount:{
        type:Boolean,
    },
    bestseller:{
        type:Boolean,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    
})
module.exports=mongoose.model("Transaction",TransactionSchema);