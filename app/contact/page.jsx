"use client";

import Header from "../../components/Header";
import Reclamation from "../../components/réclamation";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const data = {
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setSubmitted(true);
      e.target.reset();
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-pink-50 flex flex-col items-center text-center p-6 pt-20">
        <h1 className="text-4xl font-bold text-pink-700 mb-4">
          {t("contact_title")}
        </h1>
        <p className="text-lg text-gray-700 mb-2">
          {t("contact_description")}{" "}
          <span className="font-medium">rihem.nebi@nac.tn</span>
        </p>
        <p className="text-lg text-gray-700 mb-6">
          {t("contact_visit")}{" "}
          <span className="font-semibold">NA Consulting</span> 📍
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded p-8 w-full max-w-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-pink-600">
            {t("contact_form.title")}
          </h2>
          <input
            type="text"
            name="name"
            placeholder={t("contact_form.name")}
            required
            className="w-full mb-4 p-2 border border-pink-300 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder={t("contact_form.email")}
            required
            className="w-full mb-4 p-2 border border-pink-300 rounded"
          />
          <textarea
            name="message"
            placeholder={t("contact_form.message")}
            required
            className="w-full mb-4 p-2 border border-pink-300 rounded"
          />
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600"
          >
            {t("contact_form.submit")}
          </button>
          {submitted && (
            <p className="text-green-600 mt-4 text-center">
              ✅ {t("contact_success")}
            </p>
          )}
        </form>

        <div className="mt-8 w-full max-w-2xl">
          <Reclamation />
        </div>
      </div>
    </>
  );
}
