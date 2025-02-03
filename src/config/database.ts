import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI || "";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 5000, 
    })
    console.log("Successful Connection")
  } catch (error) {
    console.error("Unsuccessful Connection:", error);
    process.exit(1); 
  }
};

export default connectDB;
