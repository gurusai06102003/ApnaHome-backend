const express=require("express");
const mongoose=require("mongoose");

const propertiesSchema=require("../model/propertiesSchema")
const propertiesRoute=express.Router();

propertiesRoute.post("/createproperties",(req,res)=>{
    propertiesSchema.create(req.body,(err,data)=>{
        if(err){
            return err
        }
        else{
            try {
                const data = propertiesSchema(req.body);
                res.json(data);
            } catch (err) {
                res.status(500).json({ error: err.message });
            }
        }
    })
})
propertiesRoute.get('/getproperties',(req,res)=>{
    propertiesSchema.find((err,data)=>{
        if(err){
            return err;
        }
        else{
            res.json(data);
        }
    })
})
propertiesRoute.route("/updateproperties/:id")
.get((req,res)=>{
    propertiesSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err){
            return err;
        }
        else{
            res.json(data);
        }
    })
}).put((req,res)=>{
    propertiesSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),{$set: req.body},(err,data)=>{
        if(err){
            return err;
        }
        else{
            res.json(data);
        }
    })
})

propertiesRoute.delete("/deleteproperties/:id", (req, res) => {
    propertiesSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id), (err, data) => {
        if (err) {
            return err;
        }
        else {
            return res.json(data);
        }
    })
})
 
 

module.exports=propertiesRoute;