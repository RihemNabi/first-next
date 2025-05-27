"use client";

import { useState } from "react";

export default function ServiceAction() {
  const [envoyé, setEnvoyé] = useState(false);

  return (
    <div className="mt-4">
      {envoyé ? (
        <p className="text-green-300">✅ Votre demande a été enregistrée !</p>
      ) : (
        <button
          className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-300"
          onClick={() => setEnvoyé(true)}
        >
          Je veux ce service
        </button>
      )}
    </div>
  );
}
