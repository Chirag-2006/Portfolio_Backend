const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        max: 20
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    isAdmin: {
        type: Boolean,
        default: false
    }

}, { timestamps: true });

// Hashing the password before saving the user
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        console.error(`Error: in HASHING PASSWORD ❌❌ ${error.message}`);
        next(error);
    }
});

// jwt token
userSchema.methods.generateToken = async function () {
    try {
        let token = jwt.sign({ userId: this._id , email: this.email, isAdmin: this.isAdmin}, process.env.JWT_SECRET, { expiresIn: '30d' });
        return token;
    } catch (error) {
        console.error(`Error: in GENERATING TOKEN ❌❌ ${error.message}`);
    }
};

// compare password with bcrypt
userSchema.methods.comparePassword = async function (enteredPassword) {
    try {
        return bcrypt.compare(enteredPassword, this.password);
        
    } catch (error) {
        console.error(`Error: in MATCHING PASSWORD ❌❌ ${error.message}`);
    }
};




const User = mongoose.model('User', userSchema);
module.exports = User;
