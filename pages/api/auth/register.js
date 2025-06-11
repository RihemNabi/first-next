import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  await connectDB();
  const { email, password } = req.body;

  const userExist = await User.findOne({ email });
  if (userExist)
    return res.status(400).json({ message: "Utilisateur déjà existant" });

  const hashed = await bcrypt.hash(password, 10);
  await User.create({ email, password: hashed });

  res.status(201).json({ message: "Inscription réussie" });
}
