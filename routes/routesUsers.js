const express=require('express'); 
const route=express.Router(); 
const {authentication,signIn, logIn}=require("../controller/userController")
const { encryptPassword } = require('../middlewares');
route.get('/',authentication)
route.post('/logIn',logIn); 
route.post('/signIn',encryptPassword,signIn);

module.exports=route;