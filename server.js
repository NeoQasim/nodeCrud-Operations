const express = require('express');
const { routes } = require("./routes/GoalRoutes");
const { errorHandler } = require("./middlewares/errorMiddleware");
const app = express()
const connectDB = require("./config/connect");
require('dotenv').config();
require('colors');
const port = process.env.PORT





connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/goals", require('./routes/GoalRoutes'));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler)
app.listen(port, () => console.log(`server started and working on: ${port.yellow}`)
)
