const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');

// Import the router files
const userRoutes = require('./routes/userRoutes');
const candidateRoutes = require('./routes/candidateRoutes');
const contactRoutes = require('./routes/contactRoutes');

// Middleware setup
app.use(bodyParser.json()); // req.body
app.use(express.json());
app.use(cookieParser());

// CORS configuration
const allowedOrigins = [
    process.env.REACT_APP_FRONTEND_CONNECTTION
];

const corsOptions = {
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Serve static files from the frontend build directory
app.use(express.static(path.join(__dirname, 'frontend/build')));

// Use the routers
app.use('/user', userRoutes);
app.use('/candidate', candidateRoutes);
app.use('/contact', contactRoutes);

// Serve the frontend application
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 5000; // Ensure PORT is defined
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
