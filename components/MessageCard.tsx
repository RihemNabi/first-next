"use client";
import { useEffect, useState } from "react";
import React from "react";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";

interface Props {
  id: string;
  name: string;
  email: string;
  message: string;
  date: string;
  onDeleteAction: (id: string) => void;
}

export default function MessageCard({
  id,
  name,
  email,
  message,
  date,
  onDeleteAction,
}: Props) {
  const { t } = useTranslation();

  const handleDelete = () => {
    toast(
      (toastInstance) => (
        <div className="p-4">
          <p className="font-semibold mb-2">
            {t("messages.confirm_delete", { name })}
          </p>
          <div className="flex gap-2 justify-end">
            <button
              onClick={() => {
                toast.dismiss(toastInstance.id);
                onDeleteAction(id);
                toast.success(t("messages.deleted", { name }));
              }}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              {t("yes")}
            </button>
            <button
              onClick={() => toast.dismiss(toastInstance.id)}
              className="bg-gray-300 text-gray-800 px-3 py-1 rounded"
            >
              {t("no")}
            </button>
          </div>
        </div>
      ),
      {
        duration: 10000,
      }
    );
  };

  return (
    <div className="bg-white rounded shadow p-4 border border-pink-200">
      <h2 className="text-lg font-semibold text-pink-600">{name}</h2>
      <p className="text-sm text-gray-600 italic">{email}</p>
      <p className="mt-2 text-gray-800">{message}</p>
      <p className="mt-2 text-sm text-gray-400">
        Date : {new Date(date).toLocaleString()}
      </p>

      <button
        onClick={handleDelete}
        className="mt-4 text-sm text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600"
        aria-label={`Supprimer le message de ${name}`}
      >
        {t("actions.delete")}
      </button>
    </div>
  );
}
