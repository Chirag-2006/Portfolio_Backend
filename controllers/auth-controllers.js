const User = require("../models/user-models");
const bcrypt = require("bcrypt");


// Step for registerUser and validateUser what is chaecking
const registerUser = async (req, res) => {
    try {
        // console.log(req.body);
        const { username, email, phone, password } = req.body;
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        const user = await User.create({ username, email, phone, password });
        res.status(201).send({ message: "User created successfully", user, token: await user.generateToken() });
    } catch (error) {
        console.error(`REGISTRATION ERROR ❌❌ ${error.message}`);
        res.status(500).json({ message: "Failed to register user" });
    }
};

// Step for loginUser and validateUser what is chaecking
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        // email and password validation
        const userExist = await User.findOne({ email });
        if (!userExist) {
            return res.status(400).json({ message: "User not found" });
        }

        // compare password with bcrypt
        const compare_password = await userExist.comparePassword(password);
        if (!compare_password) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        res.status(200).send({ message: "User logged in successfully", userExist, token: await userExist.generateToken() });
    }
    catch (error) {
        console.error(`LOGIN ERROR ❌❌ ${error.message}`);
        res.status(500).json({ message: "Failed to login user" });
    }
}

// get user details
const user = async (req, res) => {
    try {
        const userData = await req.user;
        if (!userData) {
            return res.status(400).json({ message: "User not found" });
        }
        console.log("userData" , userData);
        return res.status(200).json({userData});
    }
    catch (error) {
        console.error(`USER ERROR ❌❌ ${error.message}`);
        res.status(500).json({ message: "Failed to get user" });
    }
}
module.exports = { registerUser, loginUser, user }
