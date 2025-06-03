"use client";

import { useState } from "react";

export default function ServiceAction() {
  const [sent, setSent] = useState<boolean>(false);

  return (
    <div className="mt-4">
      {sent ? (
        <p className="text-green-400">
          ✅ Votre demande a été enregistrée ! nous allons vous contacter{" "}
        </p>
      ) : (
        <button
          className="bg-pink-500 text-white px-6 py-3 rounded-lg shadow hover:bg-pink-400 hover:scale-105 transition-all duration-200"
          onClick={() => setSent(true)}
        >
          Réserver ce service
        </button>
      )}
    </div>
  );
}
