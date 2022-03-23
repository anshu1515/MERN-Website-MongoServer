const express=require('express');
const router=express.Router();
const Food=require('../models/food');
const Order=require('../models/order');


//for fetching all the food items
router.get('/allfoods',async(req,res)=>{
    try{
        const allfoods=Food.find({});
        res.status(200).json(allfoods)
    }
    catch(err){
        res.status(404).json({message:'Cannot fetch the foods at the moment'})
    }
})


//placing the new order every time
router.post('/placeorder',async(req,res)=>{
    try{
        const { cart: orderedItems } = req.body;
        const newOrder = new Order({ orderedItems });
       
        await newOrder.save()
        
        res.status(200).json({ msg: 'Order Place Successfully' });
    }
    catch(err){
        res.status(404).json({message:'Order cannot be placed'});
    }
})


module.exports=router;