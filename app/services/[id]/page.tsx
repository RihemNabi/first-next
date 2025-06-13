"use client";

import { useTranslation } from "react-i18next";
import { useParams } from "next/navigation";
import { services } from "../../../data/services";
import { Service } from "../../../types/service";
import Header from "../../../components/Header";
import ServiceDetailClient from "../../../components/ServiceDetailClient";

type Props = {
  params: {
    id: string;
  };
};

export default function ServicesPage({ params }: Props) {
  const { t } = useTranslation();

  const service: Service | undefined = services.find((s) => s.id === params.id);

  if (!service) {
    return (
      <>
        <Header />
        <p className="text-center text-red-500 mt-10">
          {t("service_not_found")}
        </p>
      </>
    );
  }

  return (
    <>
      <Header />
      <h1 className="text-2xl font-bold text-pink-700 mb-4">{service.title}</h1>
      <ServiceDetailClient service={service} />
    </>
  );
}
