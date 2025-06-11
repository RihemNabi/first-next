import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connecté");
  } catch (error) {
    console.error("Connexion échouée :", error);
  }
};

export default connectDB;
