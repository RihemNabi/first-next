"use client";

import Link from "next/link";
import Header from "../../components/Header";
import { useTranslation } from "react-i18next";

export default function AutrePage() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <div className="min-h-screen bg-pink-50 p-6 text-center flex flex-col items-center justify-start pt-20">
        <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-xl">
          <h1 className="text-4xl font-bold text-pink-700 mb-8">
            {t("autre.title")}
          </h1>

          <h2 className="text-xl font-semibold text-pink-600 mb-4">
            🔗 {t("autre.useful_links")}
          </h2>
          <ul className="text-left text-gray-700 space-y-1">
            <li>
              🗂️ {t("autre.source_code")} :{" "}
              <Link
                href="https://github.com/RihemNabi/first-next"
                target="_blank"
                className="underline"
              >
                GitHub
              </Link>
            </li>
            <li>
              🌐 {t("autre.live_project")} :{" "}
              <Link
                href="https://first-next-theta-sand.vercel.app"
                target="_blank"
                className="underline"
              >
                Vercel
              </Link>
            </li>
          </ul>

          <hr className="my-6" />

          <h2 className="text-xl font-semibold text-pink-600 mb-2">
            📚 {t("autre.resources_title")}
          </h2>
          <ul className="text-gray-700 text-left list-disc ml-6 space-y-1">
            <li>
              📄 {t("autre.resource_docs")}{" "}
              <a
                href="https://tailwindcss.com/docs"
                target="_blank"
                className="text-blue-900 underline"
              >
                Tailwind CSS
              </a>
            </li>
            <li>🎥 {t("autre.resource_videos")}</li>
            <li>🛠️ {t("autre.resource_git")}</li>
            <li>💡 {t("autre.resource_errors")}</li>
          </ul>

          <hr className="my-6" />
          <div className="bg-pink-100 rounded-lg shadow-md">
            <p className="italic text-gray-600 mt-6">
              🌸 {t("autre.mini_project_1")}
              <br />
              🌟 {t("autre.mini_project_2")}
            </p>
          </div>
        </div>

        <p className="mt-8 text-sm text-gray-700">
          {t("autre.any_question")}{" "}
          <Link
            href="/contact"
            className="text-pink-600 underline hover:text-pink-800 transition duration-200"
          >
            {t("autre.contact_us")}
          </Link>
        </p>
      </div>
    </>
  );
}
