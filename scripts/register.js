import bcrypt from "bcryptjs";
import mongoose from "mongoose";

const uri =
  "mongodb+srv://nabirihemrahma:tfhuy0Wdn5xHRpWu@cluster0.lb6fhfi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // ⛔

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

async function createUser() {
  await mongoose.connect(uri);

  const hashedPassword = await bcrypt.hash("testtest", 10); // 🔒

  const user = new User({
    email: "test@test.com", // 📧
    password: hashedPassword,
  });

  await user.save();
  console.log("✅ Utilisateur créé !");
  await mongoose.disconnect();
}

createUser().catch(console.error);
