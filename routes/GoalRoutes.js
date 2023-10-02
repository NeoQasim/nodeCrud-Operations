const express = require('express');
const { getGoal, getUser, addGoal, updategoal, deletegoal } = require('../Controllers/goalController');
const router = express.Router()
router.route("/").get(getGoal).post(addGoal)
router.route("/:id").put(updategoal).delete(deletegoal)
router.get("/get-user", getUser)

module.exports = router