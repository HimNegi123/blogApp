const express=require('express'); 
const route=express.Router(); 
const {home,blog,postBlog,getBlog}=require("../controller/homeController");
route.get('/home',home);
route.get('/blog',blog)
route.post('/postBlog',postBlog);
route.get('/getBlogs',getBlog)
module.exports=route;