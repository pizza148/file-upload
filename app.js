require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT;

//Listening Port
app.listen(PORT,()=>{console.log(`Server is running on port ${PORT}`)})