"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import ServiceCard from "../../components/serviceCard";

export default function ServicesPage() {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/services")
      .then((res) => {
        if (!res.ok) throw new Error("Erreur de chargement");
        return res.json();
      })
      .then((data) => setServices(data))
      .catch((err) => {
        console.error(err);
        setError("Impossible de charger les services 😔");
      });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-pink-600 mb-6">Nos Services</h1>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      )}
    </div>
  );
}
