const express=require("express"); 
const app=express(); 
const cookieParser = require('cookie-parser');
const cookie = require('cookie');
const PORT=4000; 
const userRoute=require('./routes/routesUsers')
const homeRoute=require('./routes/routesHome')
const dbConnection=require('./dbConnection');
dbConnection();
//middlewares 
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());
// app.use(encryptPassword);
//routes
app.use('',homeRoute);
app.use('/users',userRoute);

app.listen(PORT,function(err){
if(err) console.log(err);
else console.log(`Server is connected on ${PORT}`);
});