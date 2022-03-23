const mongoose=require('mongoose');

//order schema structure is here
const orderSchema=mongoose.Schema({
    orderedItems: [
        {
            _id: { id: false },
            name: String,
            desc: String,
            price: Number,
            qty: Number
        }
    ]
    //for created and updated at requirements
}, {timestamps:true});

module.exports=mongoose.model('Order',orderSchema);