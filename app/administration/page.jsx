"use client";
import { useEffect, useState } from "react";

export default function AdminPage() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("/api/contact")
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch("/api/contact", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        setMessages(messages.filter((msg) => msg._id !== id));
      } else {
        console.error("Échec de la suppression du message.");
      }
    } catch (error) {
      console.error("Erreur lors de la suppression du message :", error);
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-center text-pink-700 mb-6">
        Messages reçus
      </h1>

      <div className="grid gap-6 max-w-4xl mx-auto">
        {messages.length === 0 ? (
          <p className="text-center text-gray-500">Aucun message trouvé.</p>
        ) : (
          messages.map((msg) => (
            <div
              key={msg._id}
              className="bg-white rounded shadow p-4 border border-pink-200"
            >
              <h2 className="text-lg font-semibold text-pink-600">
                {msg.name}
              </h2>
              <p className="text-sm text-gray-600 italic">{msg.email}</p>
              <p className="mt-2 text-gray-800">{msg.message}</p>
              <p className="mt-2 text-sm text-gray-400">
                Date : {new Date(msg.date).toLocaleString()}
              </p>

              <button
                onClick={() => handleDelete(msg._id)}
                className="mt-4 text-sm text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600"
              >
                Supprimer
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
