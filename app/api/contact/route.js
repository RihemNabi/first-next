// app/api/contact/route.js
import { NextResponse } from "next/server";
import clientPromise from "../../../lib/mongodb";

export async function POST(request) {
  try {
    const body = await request.json();
    const client = await clientPromise;

    const db = client.db("MiniProjetDB"); // !!!!! Nom de la base1
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
