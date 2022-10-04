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
        name, 
        description, const Transaction= require ("../models/transaction"); 
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
                name, 
                description, 
                price, 
                ref,
                presentation, 
                category, 
                currency, 
                status,
                discount,
                bestseller,
                images
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
        price, 
        ref,
        presentation, 
        category, 
        currency, 
        status,
        discount,
        bestseller,
        images
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