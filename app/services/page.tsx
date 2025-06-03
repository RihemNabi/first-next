"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ServiceCard from "../../components/serviceCard";

interface Service {
  id: string;
  title: string;
  description: string;
}

export default function ServicesPage() {
  const { t } = useTranslation();
  const [services, setServices] = useState<Service[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/services")
      .then((res) => {
        if (!res.ok) throw new Error("fetch_error");
        return res.json();
      })
      .then((data) => setServices(data))
      .catch((err) => {
        console.error(err);
        setError("fetch_error");
      });
  }, []);

  return (
    <main className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-2xl font-bold text-pink-600 mb-6">
        {t("services_title")}
      </h1>

      {error ? (
        <p className="text-red-500 text-center">{t(error)}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      )}
    </main>
  );
}
