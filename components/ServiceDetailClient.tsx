"use client";

import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Service } from "../types/service";
import getEmoji from "../utils/getEmoji";

interface Props {
  service: Service;
}

export default function ServiceDetailClient({ service }: Props) {
  const { t } = useTranslation();
  const [confirmed, setConfirmed] = useState(false);

  const titleKey = `services_data.${service.id}.title`;
  const translatedTitle = t(titleKey);
  const isTranslated = translatedTitle !== titleKey;

  const emoji = getEmoji({
    title: isTranslated ? translatedTitle : "default",
  });

  return (
    <div className="min-h-[80vh] flex justify-center items-center px-4">
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-lg w-full text-center border border-pink-100">
        <div className="text-5xl mb-4">{emoji}</div>
        <h2 className="text-3xl font-bold text-pink-600 mb-2">
          {translatedTitle}
        </h2>
        <p className="text-gray-600 text-lg mb-6">
          {t(`services_data.${service.id}.description`)}
        </p>
        <button
          className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-400 transition"
          onClick={() => setConfirmed(true)}
        >
          {t(`services_data.${service.id}.cta`)}
        </button>

        {confirmed && (
          <p className="mt-4 text-green-600 font-semibold">
            {t("services_data.confirmation")}
          </p>
        )}
      </div>
    </div>
  );
}
