import Link from "next/link";

export default async function ServicesList() {
  const services = await fetch("http://localhost:3000/api/services").then(
    (res) => res.json()
  );

  return (
    <ul>
      {services.map((service) => (
        <li key={service.id}>
          <Link href={`/services/${service.id}`}>{service.name}</Link>
        </li>
      ))}
    </ul>
  );
}
/***export default function ServicesList() {
  return (
    <ul>
      <li>
        <Link href="/services/1">Service 1</Link>
      </li>
      <li>
        <Link href="/services/2">Service 2</Link>
      </li>
      <li>
        <Link href="/services/3">Service 3</Link>
      </li>
    </ul>
  );
}***/
