const mongoose=require("mongoose");
const userSchema = new mongoose.Schema({
    first_name: {
      type: String,
      require:true
    },
    last_name:{
     type: String,
    require:true
    },
   email:{
      type: String,
      require:true
    },
   blog: {
      type: String,
      require:true
    }}
);
const userModel=new mongoose.model('blogs',userSchema); 
module.exports=userModel;