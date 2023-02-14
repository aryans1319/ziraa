const mongoose = require('mongoose');

const connectDB = async () => { 
    mongoose.set("strictQuery", false);
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB connected: ${connection.connection.host}`.cyan.underline.bold); 
}

module.exports = connectDB;