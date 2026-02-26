import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongoose connected Successfully");
  } catch (error) {
    console.error("Mongoose connection failed:", error);
    process.exit(1); // Exit the process with failure
  }
};
