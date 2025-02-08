const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = async(req,res) => {
    try {
        const {username, password} = req.body;
        // Check if user is existing or not
        let user = await
        User.findOne({username});
        if(user){
            return res.status(400).json({message: "User already exists"});
        }
        // Hash password
        const hashedPassowrd = await bcrypt.hash(password, 10);

        // Creat new user
        user = new User({username, passowrd: hashedPassowrd});
        await user.save();

        res.status(201).json({message: "User registered"});
    }catch(err){
        res.status(500).json({error: err.message});
    }
};

exports.login = async (req,res) => {
    try {
        const {username, password} = req.body;
        //Check if user exists
        const user = await
        User.findOne({username});
        if(!user){
            return res.status(400).json({message: "Invalid credentials"});
        }

        // Validate password
        const isMatch = awaitbcrypt.compare(password, user.passowrd);
        if(!isMatch){
            return res.status(400).json({message: "Invalid credentials"});
        }

        //Generate JWT
        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {
            expiresIn: '1h'
        });
        res.json({token});
    }catch(err){
        res.status(500).json({error: err.message});
    }
};