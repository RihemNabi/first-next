import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Message from "../../../lib/models/message";

// Connexion MongoDB
async function connectToDB() {
  if (mongoose.connections[0].readyState === 0) {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
}

/** POST: Ajouter un message */
export async function POST(request) {
  try {
    await connectToDB();
    const body = await request.json();

    await Message.create({
      name: body.name,
      email: body.email,
      message: body.message,
      date: new Date(),
    });

    return NextResponse.json({
      success: true,
      message: "Message enregistré !",
    });
  } catch (error) {
    console.error("Erreur POST:", error);
    return NextResponse.json(
      { success: false, message: "Erreur serveur" },
      { status: 500 }
    );
  }
}

/** GET: Afficher les messages */
export async function GET() {
  try {
    await connectToDB();
    const messages = await Message.find().sort({ date: -1 });
    return NextResponse.json(messages);
  } catch (error) {
    console.error("Erreur GET:", error);
    return NextResponse.json(
      { success: false, message: "Erreur serveur" },
      { status: 500 }
    );
  }
}

/** DELETE: Supprimer un message */
export async function DELETE(request) {
  try {
    await connectToDB();
    const { id } = await request.json();
    const result = await Message.deleteOne({ _id: id });

    if (result.deletedCount === 1) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, message: "Message non trouvé." },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Erreur DELETE:", error);
    return NextResponse.json(
      { success: false, message: "Erreur serveur" },
      { status: 500 }
    );
  }
}
