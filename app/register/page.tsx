"use client";
import Header from "../../components/Header";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { t } = useTranslation();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (!res.ok) return setError(data.message);
    router.push("/login");
  };

  return (
    <>
      <Header />

      <div className="flex flex-col items-center mt-10">
        <h1 className="text-2xl mb-4">{t("register_title")}</h1>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <form onSubmit={handleRegister} className="flex flex-col w-72">
          <input
            type="email"
            placeholder={t("email")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-2 p-2 border rounded"
          />
          <input
            type="password"
            placeholder={t("password")}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-2 p-2 border rounded"
          />
          <button
            type="submit"
            className="bg-pink-500 text-white px-4 py-2 rounded"
          >
            {t("register")}
          </button>
        </form>

        <p className="mt-4">
          {t("already_account")}
          <Link href="/login-re" className="text-pink-500 underline ml-1">
            {t("login")}
          </Link>
        </p>
      </div>
    </>
  );
}
