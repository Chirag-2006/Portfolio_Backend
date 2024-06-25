const jwt = require('jsonwebtoken');
const User = require('../models/user-models');

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        if (!token) {
            return res.status(401).send({ message: "Token not found" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ _id: decoded.userId}).select('-password');
        if (!user) {
            return res.status(401).send({ message: "User not found" });
        }
        // console.log("user", user);
        req.token = token;
        // req.userId = decoded.user._id
        req.user = user;
        next();
    } catch (error) {
        res.status(401).send({ message: "Please authenticate" });
    }
}

module.exports = authMiddleware;
