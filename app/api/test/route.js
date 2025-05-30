// app/api/test/route.js
import clientPromise from "../../../lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(); // par défaut
    const collections = await db.listCollections().toArray();

    return new Response(
      JSON.stringify({ message: "Connexion réussie ✔️", collections }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Erreur de connexion ❌",
        error: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
