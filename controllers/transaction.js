const Transaction= require ("../models/transaction"); 
const bcryptjs=require("bcryptjs");
const jwt=require("jsonwebtoken");

async function getTransactionsByStatus(status,skip,limit){
   const transactions = await Transaction.find()
   .where({status})
   .skip(skip)
   .limit(limit)  
   .sort({
        name: 'asc'
    })
   ;
   return transactions;
}

async function getBestseller(bestseller,skip,limit){
    const transactions = await Transaction.find()
    .where({bestseller})
    .skip(skip)
    .limit(limit)  
    .sort({
         name: 'asc'
     })
    ;
    return transactions;
 }
 async function getDiscount(discount,skip,limit){
    const transactions = await Transaction.find()
    .where({discount})
    .skip(skip)
    .limit(limit)  
    .sort({
         name: 'asc'
     })
    ;
    return transactions;
 }

async function newTransaction(input){
    const newTransaction = input;
    const {       
        description, 
        amount, 
        ref,    
        type,
        status,
        discount,
        bestseller,
        items
    }=newTransaction;

    try{
        const transaction = new Transaction(newTransaction);
        transaction.save();
        return transaction; 
    }
    catch(error){
        console.log(error);
    }
}

module.exports={
    newTransaction,
    getTransactionsByStatus,
    getBestseller,
    getDiscount,
};