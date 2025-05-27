import Link from "next/link";

export default function ServicesList() {
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
}
