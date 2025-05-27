import Link from "next/link";
import { title } from "process";
const services = [
  { id: "1", title: "Premier Service" },
  { id: "2", title: "Deuxième Service" },
  { id: "3", title: "Troisième Service" },
];

export default function ServicesList() {
  return (
    <div>
      <h1>Nos Services</h1>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <Link href={`/services/${service.id}`}>{service.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
