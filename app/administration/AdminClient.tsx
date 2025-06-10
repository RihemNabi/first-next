"use client";
import { useEffect, useState } from "react";
import MessageCard from "../../components/MessageCard";

interface Message {
  _id: string;
  name: string;
  email: string;
  message: string;
  date: string;
}

export default function AdminClient() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    fetch("/api/contact")
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch("/api/contact", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (res.ok) setMessages((prev) => prev.filter((m) => m._id !== id));
    } catch (err) {
      console.error("Erreur de suppression :", err);
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-center text-pink-700 mb-6">
        Messages reçus
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {messages.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">
            Aucun message trouvé.
          </p>
        ) : (
          messages.map((msg) => (
            <MessageCard
              id={""}
              key={msg._id}
              {...msg}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  );
}
