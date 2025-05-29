"use client";
import { useState } from "react";

export default function ReclamationButton() {
  const [envoyé, setEnvoyé] = useState(false);

  return (
    <div className="mt-4">
      {envoyé ? (
        <p className="text-green-600">📩 Votre réclamation a été envoyée !</p>
      ) : (
        <button
          className=" bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-400"
          onClick={() => setEnvoyé(true)}
        >
          Je veux faire une réclamation
        </button>
      )}
    </div>
  );
}
