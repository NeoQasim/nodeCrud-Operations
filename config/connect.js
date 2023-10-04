const mongoose = require('mongoose');




const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit the application on connection error
    }
};


// const connectDB = async () => {
//     await mongoose.connect(process.env.MONGO_URI)
//     console.log(`database hosted on ${mongoose.connection.host}`);
// }


module.exports = connectDB;

