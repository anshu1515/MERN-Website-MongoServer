const express=require('express');
const app=express();
const mongoose=require('mongoose');
const seedDB=require('./seed');
const cors=require('cors');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log('DB Connected')
})
.catch((err)=>{
    console.log(err);
})

// seedDB();

app.use(express.json());

const foodRoutes=require('./api/foodRoutes');

//cross origin resource sharing
app.use(cors(
    {
        origin:['http://localhost:3000','https://eloquent-arithmetic-8bea62.netlify.app'],
        credentials:true
    }
))


//starting demp page
app.get('/foodapp',(req,res)=>{
    res.status(200).json({msg:'Welcome to Online Food Ordering Website && Hello from the Server Side'});
})

app.use(foodRoutes);

const port=process.env.PORT || 8000;
app.listen(port,()=>{
    console.log(`Server running on port: ${port}`);
})