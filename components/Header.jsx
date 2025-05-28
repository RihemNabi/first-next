import Link from "next/link";
export default function Header() {
  return (
    <div className="bg-pink-500  text-white p-4 text-center ">
      <nav className="flex justify-around font-semibold">
        <Link href="/">Acceuil</Link>
        <Link href="/apropos">A propos</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/services">Nos Services</Link>
      </nav>
    </div>
  );
}
