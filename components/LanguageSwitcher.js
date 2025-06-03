"use client";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2 text-sm text-white">
      <button
        onClick={() => changeLanguage("fr")}
        className={`hover:underline ${
          i18n.language === "fr" ? "font-bold text-pink-700" : "text-gray-600"
        }`}
      >
        FR{" "}
      </button>{" "}
      <button
        onClick={() => changeLanguage("en")}
        className={`hover:underline ${
          i18n.language === "en" ? "font-bold text-pink-700" : "text-gray-600"
        }`}
      >
        EN{" "}
      </button>{" "}
    </div>
  );
}
