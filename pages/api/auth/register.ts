import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../lib/mongodb";
import User from "../../../lib/models/user";
import bcrypt from "bcryptjs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    await connectDB();
    const { email, password } = req.body;

    const existing = await User.findOne({ email });
    if (existing)
      return res.status(400).json({ message: "Utilisateur déjà existant" });

    const hashed = await bcrypt.hash(password, 10);
    await User.create({ email, password: hashed });

    return res.status(201).json({ message: "Inscription réussie" });
  } catch (err) {
    console.error("Erreur serveur register:", err);
    return res.status(500).json({ message: "Erreur interne du serveur" });
  }
}
