// middleware/authenticateToken.js
const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Expecting 'Bearer <token>'
    
    if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(403).json({ msg: 'Token is not valid' });
        req.user = decoded.user; // Assuming the token contains a 'user' object with an 'id' field
        next();
    });
}

module.exports = authenticateToken;
