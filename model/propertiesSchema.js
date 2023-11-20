const mongoose=require('mongoose');

const propertiesSchema=mongoose.Schema({
    "id":{type:String},
    "Address":{type:String},
    "Price":{type:String},
    "Square_build_up_area":{type:String},
    "Carpet_area":{type:String},
    "Bedrooms":{type:String},
    "Parking":{type:String},  
    "Furnishing_State":{type:String},
    "Direction_facing":{type:String},
    "Property_on":{type:String},
    "Image":{type:String}
},{
    collection:'Properties'
})
  
module.exports=mongoose.model("propertiesSchema",propertiesSchema);
