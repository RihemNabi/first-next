"use client";

import Header from "../../components/Header";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AdminClient from "./AdminClient";
import { useTranslation } from "react-i18next";

export default function AdminPage() {
  const { t } = useTranslation();
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const res = await fetch("/api/auth/check");
      const data = await res.json();

      if (data.ok) {
        setAuthorized(true);
      } else {
        router.push("/login");
      }

      setLoading(false);
    };
    checkSession();
  }, [router]);

  if (loading) {
    return (
      <>
        <Header />
        <p className="text-center mt-10">{t("admin.loading")}</p>
      </>
    );
  }

  if (!authorized) {
    return null;
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 p-6">
        <h1 className="text-3xl font-bold text-pink-700 mb-6">
          {t("admin.title")}
        </h1>
        <AdminClient />
      </div>
    </>
  );
}
