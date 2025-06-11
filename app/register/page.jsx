"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

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
    <form
      onSubmit={handleRegister}
      className="flex flex-col items-center mt-10"
    >
      <h1 className="text-2xl mb-4">Inscription</h1>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="mb-2 p-2 border w-64"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Mot de passe"
        className="mb-2 p-2 border w-64"
      />
      <button
        type="submit"
        className="bg-pink-600 text-white py-2 px-4 rounded"
      >
        S'inscrire
      </button>
    </form>
  );
}
