// app/api/contact/route.js
import { NextResponse } from "next/server";
import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

export async function POST(request) {
  try {
    const body = await request.json();
    const client = await clientPromise;

    const db = client.db("MiniProjetDB");
    const collection = db.collection("messages");

    await collection.insertOne({
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
    console.error("Erreur lors de l’insertion :", error);
    return NextResponse.json(
      { success: false, message: "Erreur serveur" },
      { status: 500 }
    );
  }
}

//  GET pour afficher les messages
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("MiniProjetDB");
    const collection = db.collection("messages");

    const messages = await collection.find().toArray();

    return NextResponse.json(messages);
  } catch (error) {
    console.error("Erreur lors de la récupération :", error);
    return NextResponse.json(
      { success: false, message: "Erreur serveur" },
      { status: 500 }
    );
  }
}
export async function DELETE(request) {
  try {
    const { id } = await request.json();
    const client = await clientPromise;
    const db = client.db("MiniProjetDB");
    const collection = db.collection("messages");

    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 1) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, message: "Message non trouvé." },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Erreur lors de la suppression :", error);
    return NextResponse.json(
      { success: false, message: "Erreur serveur" },
      { status: 500 }
    );
  }
}
