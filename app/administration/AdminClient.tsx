"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import MessageCard from "../../components/MessageCard";

interface Message {
  _id: string;
  name: string;
  email: string;
  message: string;
  date: string;
}

export default function AdminClient() {
  const { t } = useTranslation();
  const [messages, setMessages] = useState<Message[]>([]);
  const [search, setSearch] = useState("");

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
      if (res.ok) {
        setMessages((prev) => prev.filter((m) => m._id !== id));
      }
    } catch (err) {
      console.error("Erreur de suppression :", err);
    }
  };

  const filteredMessages = messages.filter((msg) => {
    const query = search.toLowerCase();
    return (
      msg.name.toLowerCase().includes(query) ||
      msg.email.toLowerCase().includes(query) ||
      msg.message.toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-center text-pink-700 mb-6">
        {t("nav_admin")}
      </h1>

      <div className="flex justify-center mb-6">
        <div className="relative w-full max-w-md">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            🔍
          </span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t("admin.search") || "Rechercher..."}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredMessages.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">
            {t("no_messages")}
          </p>
        ) : (
          filteredMessages.map((msg) => (
            <MessageCard
              id={msg._id}
              key={msg._id}
              {...msg}
              onDeleteAction={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  );
}
