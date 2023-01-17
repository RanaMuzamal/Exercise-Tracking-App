const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id)=>{
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '5d' })
}
// Login Users
const loginUser = async(req, res)=>{
    const { email, password } = req.body;

    try{
        const user = await User.login(email, password);

        // Create a token
        const token = createToken(user._id)

        res.status(201).json({email, token});
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}
// Signup Users
const signupUser = async(req, res)=>{
    const { firstName, lastName, email, password } = req.body;

    try{
        const user = await User.signup(firstName, lastName, email, password);

        // Create a token
        const token = createToken(user._id)

        res.status(201).json({email, token});
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = { loginUser, signupUser };