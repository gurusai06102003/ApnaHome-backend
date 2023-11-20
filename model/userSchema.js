const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    "Name":{type:String},
    "Email":{type:String},
    "Password":{type:String}
},{
    collection:"Users"
})


module.exports=mongoose.model("userSchema",userSchema)