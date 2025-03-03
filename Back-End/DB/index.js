import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/ISLAMI_ZONE`
    );
    console.log("Mongo DB is connected");
  } catch (error) {
    console.log("Connection failed with database");
    process.exit(1);
  }
};

export default connectDB;
