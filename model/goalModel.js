const mongoose = require('mongoose');

const goalSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "usermodelnames",
    },

    goal: {           //goalmodel or goalcontroller ""goal"" wala  same hona chahiye 

        type: String,
        require: [true, "please all the Desired field"]

    }
}, {
    timestamps: true
})

module.exports = mongoose.model('newgoal', goalSchema)