const process=require("process"); 
const jwt=require("jsonwebtoken")
const AUTH_KEY='mynameisblogapp'
const modelUser=require("../Models/signInSchema");
const modelData=require("../Models/blogSchema")
const home=function(req,res){
    const token = req.cookies.blog;
    console.log(token);
    if(token==undefined){
        res.sendFile(`${process.cwd()}/public/index.html`);
    }
  else  res.redirect('/blog')
}
const blog=function(req,res){
    res.sendFile(`${process.cwd()}/public/blogPage.html`);
    }
    
    const postBlog= async function(req,res){
        const token = req.cookies.blog;
        const userId=await jwt.verify(token,AUTH_KEY);
        console.log(userId)
        const userData=await modelUser.findOne({_id:userId._id});
        console.log(userData);
        await modelData.create({
        first_name:userData.first_name,
        last_name:userData.last_name,
        email:userData.email,
    blog:req.body.blog});
    }
    const getBlog=async function(req,res){
        const userData=await modelData.find();
        console.log(userData);
        res.send(userData)
    }
module.exports={home,blog,postBlog,getBlog};