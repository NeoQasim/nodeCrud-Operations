const mongoose = require('mongoose');


const coonectDB = async () => {
    const serve = await mongoose.connect(process.env.MONGO_URI)
    console.log(`database hosted on ${mongoose.connection.host}`);
}

module.exports = { coonectDB }