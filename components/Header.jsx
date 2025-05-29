"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-pink-500 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-white text-lg font-bold">🌸 Mini-Projet</h1>

        <button
          className="text-white text-3xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Menu pour grands écrans */}
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-white hover:text-pink-100">
            Accueil
          </Link>
          <Link href="/apropos" className="text-white hover:text-pink-100">
            À propos
          </Link>
          <Link href="/services" className="text-white hover:text-pink-100">
            Services
          </Link>
          <Link href="/contact" className="text-white hover:text-pink-100">
            Contact
          </Link>
          <Link href="/autre" className="text-white hover:text-pink-100">
            Autres
          </Link>
        </nav>
      </div>

      {/* Menu mobile visible quand isOpen = true */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-2 bg-pink-400">
          <Link href="/" className="text-white hover:text-pink-100">
            Accueil
          </Link>
          <Link href="/apropos" className="text-white hover:text-pink-100">
            À propos
          </Link>
          <Link href="/services" className="text-white hover:text-pink-100">
            Services
          </Link>
          <Link href="/contact" className="text-white hover:text-pink-100">
            Contact
          </Link>
          <Link href="/autre" className="text-white hover:text-pink-100">
            Autres
          </Link>
        </div>
      )}
    </header>
  );
}
