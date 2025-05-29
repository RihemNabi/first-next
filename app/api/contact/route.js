export async function POST(request) {
  const body = await request.json();
  console.log("Formulaire reçu :", body);

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
