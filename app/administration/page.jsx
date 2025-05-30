"use client";
import { useEffect, useState } from "react";

export default function AdminPage() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("/api/contact")
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-center text-pink-700 mb-6">
        Messages reçus
      </h1>

      <div className="grid gap-6 max-w-4xl mx-auto">
        {messages.length === 0 ? (
          <p className="text-center text-gray-500">Aucun message trouvé.</p>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              className="bg-white rounded shadow p-4 border border-pink-200"
            >
              <h2 className="text-lg font-semibold text-pink-600">
                {msg.name}
              </h2>
              <p className="text-sm text-gray-600 italic">{msg.email}</p>
              <p className="mt-2 text-gray-800">{msg.message}</p>
              <p className="mt-2 text-sm text-gray-400">Date : à venir 🕒</p>

              <button className="mt-4 text-sm text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600">
                Supprimer
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
