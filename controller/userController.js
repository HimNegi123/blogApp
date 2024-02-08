const process=require("process"); 
const bcrypt=require("bcrypt");
const cookie = require('cookie');
const jwt=require("jsonwebtoken");
const AUTH_KEY='mynameisblogapp'
const model=require("../Models/signInSchema")
const authentication=function(req,res){
    res.sendFile(`${process.cwd()}/public/authentication.html`)
}
const signIn = async function (req, res) {
        try {
            const createUser = await model.create(req.body);
            // Assuming AUTH_KEY is your secret key for signing JWTs
            const token = jwt.sign({ _id: createUser._id }, AUTH_KEY);
            // Set the token in a cookie named 'blog'
            res.cookie('blog', token, { httpOnly: true });
            res.send({
              status: true,
            });
          } catch (e) {
            console.error(e);
            res.send({
              status: false,
            });
          }
    }
const logIn=async function(req,res){
        const email=req.body.email; 
        const password=req.body.password; 
        const userValue=await model.findOne({email:email}); 
        console.log(userValue)
       const is= await bcrypt.compare(password,userValue.password);
       console.log(is)
       const token = await jwt.sign({ _id: userValue._id }, AUTH_KEY);
       console.log(token)
        res.cookie('blog', token, { httpOnly: true });
       if(is){
        res.send({
            status:true
            }); 
       }
       else res.send({
        status:false
        });
    }
module.exports={authentication,signIn,logIn}