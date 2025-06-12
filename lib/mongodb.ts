import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;
if (!uri) throw new Error("MONGODB_URI non défini");

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;
  await mongoose.connect(uri);
};

export default connectDB;
