const express=require("express");
const mongoose=require("mongoose");

const userSchema=require("../model/userSchema")
const userRoute=express.Router();

userRoute.post("/createUser",(req,res)=>{
    userSchema.create(req.body,(err,data)=>{
        if(err){
            return err
        }
        else{
            try {
                const data = userSchema(req.body);
                res.json(data);
            } catch (err) {
                res.status(500).json({ error: err.message });
            }
        }
    })
})
userRoute.get('/getUser',(req,res)=>{
    userSchema.find((err,data)=>{
        if(err){
            return err;
        }
        else{
            res.json(data);
        }
    })
})
userRoute.route("/updateUser/:id")
.get((req,res)=>{
    userSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err){
            return err;
        }
        else{
            res.json(data);
        }
    })
}).put((req,res)=>{
    userSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),{$set: req.body},(err,data)=>{
        if(err){
            return err;
        }
        else{
            res.json(data);
        }
    })
})
 

module.exports=userRoute;