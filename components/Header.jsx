import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 text-center">
      <nav className="flex justify-center gap-6">
        <Link href="/">Accueil</Link>
        <Link href="/apropos">À propos</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/autre">Autre</Link>
      </nav>
    </header>
  );
}
