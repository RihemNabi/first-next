"use client";
import "./i18n";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import LanguageSwitcher from "../components/LanguageSwitcher";
export default function Home() {
  const { t } = useTranslation();
  return (
    <main className="min-h-screen bg-pink-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full text-center p-6">
        <img
          src="/rose.png"
          alt="rose logo"
          className="w-32 h-32 mx-auto rounded-full border-4 border-pink-200 mb-4"
        />
        <h1 className="text-2xl font-bold text-pink-700">
          {t("project_title")}
        </h1>
        <p className="text-pink-600 mt-2">{t("welcome")}</p>
        <div className="mt-6 flex flex-col gap-3">
          <Link
            href="/apropos"
            className="bg-pink-300 hover:bg-pink-400 text-white py-2 px-4 rounded-lg"
          >
            {t("about")}
          </Link>
          <Link
            href="/services"
            className="bg-pink-300 hover:bg-pink-400 text-white py-2 px-4 rounded-lg"
          >
            {t("services")}
          </Link>
          <Link
            href="/contact"
            className="bg-pink-200 hover:bg-pink-300 text-pink-800 py-2 px-4 rounded-lg"
          >
            {t("contact")}
          </Link>
          <Link
            href="/autre"
            className="bg-pink-100 hover:bg-pink-200 text-pink-700 py-2 px-4 rounded-lg"
          >
            {t("others")}
          </Link>
        </div>
        <p className="text-sm text-gray-500 mt-6">{t("thank_you")}</p>
        <LanguageSwitcher />
      </div>
    </main>
  );
}
