"use client";

import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import NavLink from "./NavLink";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();
  const { t } = useTranslation();
  console.log("⚡️ Session:", session, "Status:", status);
  if (status === "loading") return null; // ou un petit spinner

  return (
    <header className="bg-pink-500 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-white text-lg font-bold">
          🌸 Mini‑Projet
        </Link>

        <button
          className="text-white text-3xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        <nav className="hidden md:flex items-center gap-6">
          <NavLink href="/">{t("nav_home")}</NavLink>
          <NavLink href="/apropos">{t("nav_about")}</NavLink>
          <NavLink href="/services">{t("nav_services")}</NavLink>
          <NavLink href="/contact">{t("nav_contact")}</NavLink>
          <NavLink href="/autre">{t("nav_others")}</NavLink>
          <NavLink href="/administration">{t("nav_admin")}</NavLink>
          <LanguageSwitcher />

          {session ? (
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="bg-white text-pink-600 font-semibold px-3 py-1 rounded"
            >
              {t("nav_logout")}
            </button>
          ) : (
            <Link
              href="/login"
              className="bg-white text-pink-600 font-semibold px-3 py-1 rounded"
            >
              {t("nav_login")}
            </Link>
          )}
        </nav>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-2 bg-pink-400">
          <NavLink href="/">{t("nav_home")}</NavLink>
          <NavLink href="/apropos">{t("nav_about")}</NavLink>
          <NavLink href="/services">{t("nav_services")}</NavLink>
          <NavLink href="/contact">{t("nav_contact")}</NavLink>
          <NavLink href="/autre">{t("nav_others")}</NavLink>
          <NavLink href="/administration">{t("nav_admin")}</NavLink>
          <LanguageSwitcher />

          {session ? (
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="bg-white text-pink-600 font-semibold px-3 py-1 rounded mt-2"
            >
              {t("nav_logout")}
            </button>
          ) : (
            <Link
              href="/login"
              className="bg-white text-pink-600 font-semibold px-3 py-1 rounded mt-2"
            >
              {t("nav_login")}
            </Link>
          )}
        </div>
      )}
    </header>
  );
}
