"use client";
import Reclamation from "../../components/réclamation";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

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
    <div className="min-h-screen bg-pink-50 flex flex-col items-center text-center p-6 pt-20">
      <h1 className="text-4xl font-bold text-pink-700 mb-4">Contactez-moi</h1>
      <p className="text-lg text-gray-700 mb-2">
        Vous pouvez me joindre à :{" "}
        <span className="font-medium">rihem.nebi@nac.tn</span>
      </p>
      <p className="text-lg text-gray-700 mb-6">
        Ou passer me voir à <span className="font-semibold">NA Consulting</span>{" "}
        📍
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-pink-600">
          Formulaire de contact
        </h2>
        <input
          type="text"
          name="name"
          placeholder="Nom"
          required
          className="w-full mb-4 p-2 border border-pink-300 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full mb-4 p-2 border border-pink-300 rounded"
        />
        <textarea
          name="message"
          placeholder="Message"
          required
          className="w-full mb-4 p-2 border border-pink-300 rounded"
        />
        <button
          type="submit"
          className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600"
        >
          Envoyer
        </button>
        {submitted && (
          <p className="text-green-600 mt-4 text-center">
            ✅ Message envoyé avec succès !
          </p>
        )}
      </form>

      <div className="mt-8 w-full max-w-2xl">
        <Reclamation />
      </div>
    </div>
  );
}
