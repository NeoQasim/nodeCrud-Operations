const asyncHandler = require('express-async-handler');
const newgoal = require('../model/goalModel');

const getGoal = (req, res) => {
    res.status(200).json({
        data: "data fetched"
    });
}

// add the goal
const addGoal = asyncHandler(async (req, res) => {
    const goal = req.body.goal // ye wala name goal model ma same hona chahiye 
    // console.log(goal);

    if (!goal) {
        res.status(400);
        throw new Error('Please enter the field')
    }
    const myGoal = await newgoal.create({
        goal
    })

    res.status(200).send(myGoal);
})
const updategoal = (req, res) => {
    const id = req.params.id
    res.status(200).json({
        data: `data posted  with id ${id}`
    });
}
const deletegoal = (req, res) => {
    res.status(200).json({
        data: `data posted  with id ${id}`
    });
}
const getUser = (res, req) => {
    res.status(200).json({
        data: "user fetched"
    });
}

module.exports = {
    getGoal,
    addGoal,
    getUser,
    updategoal,
    deletegoal
}