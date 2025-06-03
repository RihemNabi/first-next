"use client";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import NavLink from "./NavLink";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

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

        {/* Menu grand écran */}
        <nav className="hidden md:flex gap-6">
          <NavLink href="/">{t("nav_home")}</NavLink>
          <NavLink href="/apropos">{t("nav_about")}</NavLink>
          <NavLink href="/services">{t("nav_services")}</NavLink>
          <NavLink href="/contact">{t("nav_contact")}</NavLink>
          <NavLink href="/autre">{t("nav_others")}</NavLink>
          <NavLink href="/administration">{t("nav_admin")}</NavLink>
          <LanguageSwitcher />
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
          <div className="pt-2">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  );
}
