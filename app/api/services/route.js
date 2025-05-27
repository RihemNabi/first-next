export async function GET() {
  const services = [
    { id: 1, name: "Service 1 " },
    { id: 2, name: "Service 2" },
    { id: 3, name: "Service 3" },
  ];
  return Response.json(services);
}
