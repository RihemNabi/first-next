"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-pink-100">
      <button
        onClick={() => signIn("google")}
        className="bg-pink-600 hover:bg-pink-500 text-white px-6 py-3 rounded-lg shadow-lg"
      >
        Se connecter avec Google
      </button>
    </div>
  );
}
