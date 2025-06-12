"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ReclamationButton() {
  const [sent, setSent] = useState<boolean>(false);
  const { t } = useTranslation();
  return (
    <div className="mt-4">
      {sent ? (
        <p className="text-green-600">{t("reclam-confirmation")}</p>
      ) : (
        <button
          className=" bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-400"
          onClick={() => setSent(true)}
        >
          {t("reclam")}
        </button>
      )}
    </div>
  );
}
