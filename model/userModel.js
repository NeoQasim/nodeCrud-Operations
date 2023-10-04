const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "please enter the username"],
        // unique: true,
    },
    email: {
        type: String,
        require: [true, "please enter your email"],
        unique: true,

    },
    password: {
        type: String,
        require: [true, "please enter your password"],

    },
});

module.exports = mongoose.model("usermodelname", userSchema);
