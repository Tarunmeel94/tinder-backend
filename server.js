import mongoose from 'mongoose';
import express from 'express';
import card from './dbCards.js';
import cors from 'cors';
const app = express();
const db_url="mongodb+srv://admin:admin@cluster0.nihhw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

//middleware 
app.use(cors());
app.use(express.json())
//db config
mongoose.connect(db_url,{ 
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
},()=>{
    console.log('connect')
},
)
//Endpoints
app.get('/',(req, res)=>{
    res.send("First page")
})
app.post('/tinder/card',(req, res)=>{
    const dbcard=req.body;
     card.create(dbcard,(err,data)=>{
         if(err){
             res.status(500).send(err)
         }
         else{
             res.status(201).send(data)
         }
     })

});
app.get('/tinder/card',(req, res)=>{
card.find((err,data)=>{
    if(err){
        res.status(500).send(err)
    }else{
        res.status(200).send(data)
    }
})

})




//listen
app.listen(5000,()=>{
    console.log('listing on :'+5000)
})