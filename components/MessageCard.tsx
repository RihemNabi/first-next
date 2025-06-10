"use client";
import { useEffect, useState } from "react";
import React from "react";

interface Props {
  id: string;
  name: string;
  email: string;
  message: string;
  date: string;
  onDelete: (id: string) => void;
}

export default function MessageCard({
  id,
  name,
  email,
  message,
  date,
  onDelete,
}: Props) {
  return (
    <div className="bg-white rounded shadow p-4 border border-pink-200">
      <h2 className="text-lg font-semibold text-pink-600">{name}</h2>
      <p className="text-sm text-gray-600 italic">{email}</p>
      <p className="mt-2 text-gray-800">{message}</p>
      <p className="mt-2 text-sm text-gray-400">
        Date : {new Date(date).toLocaleString()}
      </p>

      <button
        onClick={() => onDelete(id)}
        className="mt-4 text-sm text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600"
        aria-label={`Supprimer le message de ${name}`}
      >
        Supprimer
      </button>
    </div>
  );
}
