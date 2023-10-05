const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel");
const asyncHandler = require("express-async-handler");

const protectRoute = asyncHandler(async (req, res, next) => {
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await userModel.findById(decode.id);
            next()
        } catch (error) {
            res.status(401);
            throw new Error("not authorized");
        }
    } else {
        throw new Error("no token found");
    }
});

module.exports = protectRoute;
