const bcrypt = require('bcrypt');
const asyncHandler = require('express-async-handler');
const userModel = require('../model/userModel');
const jwt = require('jsonwebtoken');
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        res.status(400)
        throw new Error("please enter all the desired field ")
    }
    const checkUser = await userModel.findOne({ name, email })
    if (checkUser) {
        throw new Error("user already exists ")
    } else {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)
        const newuser = await userModel.create({ name, email, password: hashedPassword })
        res.send({
            id: newuser._id,
            name: newuser.name,
            password: newuser.password,
            token: generateToken(newuser._id)
        })
    }

}
)
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        throw new Error('please enter all the fields')
    }
    const checkUser = await userModel.findOne({ email });
    if (!checkUser) {
        throw new Error("no user found")
    }
    const compare = await bcrypt.compare(password, checkUser.password)
    if (checkUser && compare) {
        res.send({
            // checkUser,
            id: checkUser._id,
            name: checkUser.name,
            password: checkUser.password,
            token: generateToken(checkUser._id)
        })

    } else {
        res.status(404)
        throw new Error("user doesnot existes or invalid credentials")

    }
});

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1hr" })
}
module.exports = {
    registerUser,
    loginUser
}