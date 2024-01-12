import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("connected to mongodb");
    } catch (e) {
        throw new Error("error while connecting");
    }
};

export default connectMongoDB;