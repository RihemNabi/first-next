"use client";
import { useState } from "react";

export default function ReclamationButton() {
  const [sent, setSent] = useState<boolean>(false);

  return (
    <div className="mt-4">
      {sent ? (
        <p className="text-green-600">📩 Votre réclamation a été envoyée !</p>
      ) : (
        <button
          className=" bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-400"
          onClick={() => setSent(true)}
        >
          Je veux faire une réclamation
        </button>
      )}
    </div>
  );
}
