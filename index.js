//app create
const express = require("express");
const app=express();

//port find out karna
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware add karte
app.use(express.json());
const fileupload=require("express-fileupload");
app.use(fileupload());

//DB conection
const db=require("./config/database");
db.connect();

//Cloud connection
const cloudinary =require("./config/cloudinary");
cloudinary.cloudinaryConnect();

//Api mount
const Upload=require("./routes/FileUpload")
app.use('/api/v1/upload',Upload)

//activate server
app.listen(PORT,()=>{
    console.log(`App is running at ${PORT}`);
})