const express = require('express');
const { getGoal, getUser, addGoal, updategoal, deletegoal } = require('../Controllers/goalController');
const protectRoute = require('../middlewares/authMiddleware');
const router = express.Router()
router.route("/").get(protectRoute, getGoal).post(addGoal)
router.route("/:id").put(protectRoute,updategoal).delete(deletegoal)
router.get("/get-user", getUser)

module.exports = router