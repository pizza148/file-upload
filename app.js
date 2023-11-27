require('dotenv').config();
const express = require('express');
const expressLayout = require('express-ejs-layouts');
const connectDB = require('./server/config/db');
const fileUpload = require('express-fileupload');
// create app
const app = express();
const PORT = process.env.PORT;



//Using
app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use(fileUpload());
connectDB();
//Static File
app.use(express.static('upload'));
//Templating Engine
app.use(expressLayout);
app.set('layout','./layouts/main');
app.set('view engine','ejs');

exports.dir = __dirname;
//Route
app.use('',require('./server/routes/routes'))


//Listening Port
app.listen(PORT,()=>{console.log(`Server is running on port ${PORT}`)})