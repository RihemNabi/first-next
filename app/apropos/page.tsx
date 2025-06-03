"use client";
"use client";
import { useTranslation } from "react-i18next";

export default function AproposPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-xl p-8 max-w-2xl w-full text-center">
        <h1 className="text-3xl font-bold text-pink-700 mb-4">
          {t("about_title")}
        </h1>
        <p className="text-gray-700 mb-4">{t("about_intro")}</p>
        <p className="text-gray-700 mb-4">{t("about_objectives")}</p>
        <ul className="text-left text-gray-700 list-disc list-inside mb-4">
          <li>{t("about_goal_1")}</li>
          <li>{t("about_goal_2")}</li>
          <li>{t("about_goal_3")}</li>
        </ul>
        <p className="text-gray-600 italic">{t("about_footer")}</p>
      </div>
    </div>
  );
}
