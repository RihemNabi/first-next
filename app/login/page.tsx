"use client";

import Header from "../../components/Header";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { t } = useTranslation();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
      callbackUrl: "/administration",
    });
    if (!result?.ok) setError(t("errors.invalid_credentials"));
    else router.push("/administration");
  };

  return (
    <>
      <Header />

      <div className="flex justify-center items-start min-h-screen bg-pink-50 pt-24">
        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center bg-white shadow-md rounded p-8 w-full max-w-md"
        >
          <h1 className="text-2xl mb-4">{t("login.title")}</h1>

          {error && <p className="text-red-500 mb-2">{t(`errors.${error}`)}</p>}

          <input
            type="email"
            placeholder={t("login.email")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-2 p-2 border rounded w-full"
            required
          />

          <input
            type="password"
            placeholder={t("login.password")}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4 p-2 border rounded w-full"
            required
          />

          <button
            type="submit"
            className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600 w-full"
          >
            {t("login.submit")}
          </button>

          <p className="mt-4 text-sm text-gray-700 text-center">
            {t("login.no_account")}{" "}
            <Link
              href="/register"
              className="text-pink-500 underline hover:text-pink-700"
            >
              {t("login.register")}
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
