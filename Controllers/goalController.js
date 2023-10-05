const asyncHandler = require('express-async-handler');
const goalModel = require('../model/goalModel');
//goal ka ya koi b model jis variable  ma b import kreng ge CRUD Methods b usi variable per lgy gai mtlb k usi variable
//ko call krenge aur find ya create ya respective method lgana ha jese line 7 ma find or line 20 ma create ka method 
//lgya aha 'goalModel' pe q k model ko maine "goalModel  nam k const ma store krwaya ha aur wahee per goalSchema defined ha"
const getGoal = asyncHandler(async (req, res) => {
    const getgoals = await goalModel.find({ user: req.user.id })
    res.status(200).send(getgoals)
}
)
// add the goal
const addGoal = asyncHandler(async (req, res) => {
    const goal = req.body.goal // ye wala name goal model ma same hona chahiye 
    // console.log(goal);

    if (!goal) {
        res.status(400);
        throw new Error('Please enter all the fields ')
    }
    const myGoal = await goalModel.create({
        goal,
        user: req.user._id
    })

    res.status(200).send(myGoal);
})
const updategoal = asyncHandler(async (req, res) => {
    const id = req.params.id
    const findGoal = await goalModel.findById(id)
    if (!findGoal) {
        res.status(404)
        throw new Error("goal is not found")

    } else {
        const updatedGoal = await goalModel.findByIdAndUpdate(id, req.body, { new: true })
        res.status(201).send(updatedGoal)
    }
}
)
const deletegoal = asyncHandler(async (req, res) => {
    const id = req.params.id
    const findGoal = await goalModel.findById(id)
    if (!findGoal) {
        res.status(404)
        throw new Error("goal is not found")

    } else {
        await findGoal.deleteOne()

    }
    res.status(200).json({
        data: `goal with id ${id} has been deleted`
    })
})
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