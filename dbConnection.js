const mongoose = require("mongoose");
async function dbConnection(){
    await mongoose.connect('mongodb://0.0.0.0:27017/BlogBase')
.then(() => {
    console.log("Mongoose connected");
  })
.catch((error) => {
    console.error("Mongoose connection error:", error);
});
}
module.exports=dbConnection;