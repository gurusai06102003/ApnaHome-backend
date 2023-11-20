const express=require('express');

const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');

var app=express();
mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://test:12345@cluster0.mhawlnl.mongodb.net/Project")

const userRoute=require('./controller/userRouter')
const propertiesRoute=require('./controller/propertiesRouter')
var db=mongoose.connection

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use("/Route",userRoute),
app.use("/Route",propertiesRoute)

db.on('open',()=>console.log("Connected to DB"))
db.on('error',()=>console.log("Error Occured"))

app.listen(4000,()=>console.log("Server started at 4000"))