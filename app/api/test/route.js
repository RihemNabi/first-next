import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Lazy import de clientPromise (PAS au niveau global !)
    const clientPromise = (await import("@/lib/mongodb")).default;
    const client = await clientPromise;
    const db = client.db("MiniProjetDB");

    const collections = await db.listCollections().toArray();

    return NextResponse.json({
      message: "Connexion réussie ✅",
      collections,
    });
  } catch (error) {
    console.error("Erreur de connexion MongoDB:", error);
    return NextResponse.json(
      { message: "Erreur de connexion ❌" },
      { status: 500 }
    );
  }
}
