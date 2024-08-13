
const jwt = require('jsonwebtoken');

const secret_key = process.env.REACT_APP_SECRET_KEY;


const jwtAuthMiddleware = async (req, res, next) => {
    // console.log("jwt middleware .............");
    const authorization = req.headers.authorization;
    // console.log("authorization : ", authorization)
    if (!authorization) return res.status(401).json({ error: 'Token Not Found' });

    const token = req.headers.authorization.split(' ')[1];
    // console.log("token -->", token);
    // if (!token) return res.status(401).json({ error: 'Unauthorized' });

    try {
        const decoded = jwt.verify(token, secret_key);
        req.user = decoded;
        // console.log("complted the authoriaztion header")
        next();
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: 'Invalid token', setLogin: false });
    }
};



// Function to generate JWT token
const generateToken = (userData) => {
    return jwt.sign(userData, process.env.REACT_APP_SECRET_KEY, { expiresIn: '19h' });
};

module.exports = { jwtAuthMiddleware, generateToken };
