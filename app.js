const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();
const cors = require("cors")
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // req.body 
const PORT = process.env.REACT_APP_PORT;

const cookieParser = require('cookie-parser');
const path = require('path');
// Import the router files
const userRoutes = require('./routes/userRoutes');
const candidateRoutes = require('./routes/candidateRoutes');
const contactRoutes = require('./routes/contactRoutes');

const allowedOrigins = [
    `https://voting-rohit-nl2wyor2i-rohitmeshram45s-projects.vercel.app/`
];

const corsOptions = {
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};
// 
// Use the routers

app.use(express.static(path.join(__dirname, 'frontend/build')));

app.use(express.json());
app.use(cookieParser());

app.use('/user', userRoutes);
app.use('/candidate', candidateRoutes);
app.use('/contact', contactRoutes);


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

app.listen(PORT, () => {
    // console.log('listening on port ',PORT);
})
