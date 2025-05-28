"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

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
        <ul>
          {services.map((service) => (
            <li key={service.id} className="mb-4">
              <Link href={`/services/${service.id}`}>
                <h3 className="text-lg font-semibold text-pink-700 hover:underline">
                  {service.title}
                </h3>
              </Link>
              <p className="text-gray-600">{service.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
