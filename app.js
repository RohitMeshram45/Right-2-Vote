const express = require('express')
const app = express();
const db = require('./db'); 
require('dotenv').config(); 
const cors= require("cors")
const bodyParser = require('body-parser');   
app.use(bodyParser.json()); // req.body 
const PORT = process.env.REACT_APP_PORT; 

const cookieParser = require('cookie-parser');

const path = require('path');
// Import the router files
const userRoutes = require('./routes/userRoutes');
const candidateRoutes = require('./routes/candidateRoutes');
const contactRoutes = require('./routes/contactRoutes');


const allowedOrigins = ["https://voting-rohit.vercel.app/"];

const corsOptions = {
  origin: function (origin, callback) {
    // Check if the origin is in the allowedOrigins array
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // if your frontend needs to send or receive cookies
};


// app.use(cors({
//     origin: process.env.REACT_APP_FRONTEND_CONNECTTION, // Your frontend URL
//     credentials: true, // Allow credentials (cookies, authorization headers, etc.)
// }));
// Use the routers

app.use(express.json());
app.use(cookieParser());

// Use the CORS middleware
app.use(cors(corsOptions));

app.use('/user',()=> console.log("User Routes found"), userRoutes);
app.use('/candidate', candidateRoutes);
app.use('/contact', contactRoutes);

app.get('/',(req,res)=>{
    app.use(express.static(path.join(__dirname,"frontend","build")));
    res.sendFile(path.join(__dirname,"frontend","build","index.html"))
})

app.listen(PORT, ()=>{
    // console.log('listening on port ',PORT);
})
