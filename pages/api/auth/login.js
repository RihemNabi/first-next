import clientPromise from "../../../lib/mongodb";
import User from "../../../lib/models/user";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }

  try {
    clientPromise;

    const { email, password } = req.body;
    console.log("Tentative de connexion...");
    console.log("Email:", email, "Password:", password);

    const user = await User.findOne({ email });
    if (!user) {
      console.log("❌ Utilisateur non trouvé");
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("❌ Mot de passe incorrect");
      return res.status(401).json({ message: "Mot de passe incorrect" });
    }

    console.log("✅ Connexion réussie !");
    return res.status(200).json({ message: "Connexion réussie" });
  } catch (error) {
    console.error("❌ Erreur côté serveur :", error);
    return res.status(500).json({ message: "Erreur interne du serveur" });
  }
}
