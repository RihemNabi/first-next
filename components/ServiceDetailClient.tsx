"use client";

import { useTranslation } from "react-i18next";
import { Service } from "../types/service";
import getEmoji from "../utils/getEmoji";

interface Props {
  service: Service;
}

export default function ServiceDetailClient({ service }: { service: Service }) {
  const { t } = useTranslation();
  const emoji = getEmoji({ title: service.title });

  return (
    <div className="min-h-[80vh] flex justify-center items-center px-4">
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-lg w-full text-center border border-pink-100">
        <div className="text-5xl mb-4">{emoji}</div>
        <h2 className="text-3xl font-bold text-pink-600 mb-2">
          {t(`services_data.${service.id}.title`)}
        </h2>
        <p className="text-gray-600 text-lg mb-6">
          {t(`services_data.${service.id}.description`)}
        </p>
        <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-400 transition">
          {t("services_data.cta")}
        </button>
      </div>
    </div>
  );
}
