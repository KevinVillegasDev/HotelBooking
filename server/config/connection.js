const mongoose = require("mongoose");
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("connected!");
    } catch {
        console.error("error connecting");
    }
};
module.exports = connectDB;
