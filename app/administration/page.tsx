"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AdminClient from "./AdminClient";

export default function AdminPage() {
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

  if (loading) return <p className="text-center mt-10">Chargement...</p>;

  return (
    <>
      <AdminClient />
    </>
  );
}
