const mongoose = require('mongoose');

const goalSchema = mongoose.Schema({

    goal: {           //goalmodel or goalcontroller ""goal"" wala  same hona chahiye 

        type: String,
        required: [true, "please all the Desired field"]

    }
}, {
    timestamps: true
})

module.exports = mongoose.model('newgoal', goalSchema)