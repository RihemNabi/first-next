import { Service } from "../types/service";
import { useTranslation } from "react-i18next";

interface ServiceCardProps {
  service: Service;
}
export default function ServiceCard({ service }) {
  if (!service) return null; // sécurité
  const { t } = useTranslation();

  return (
    <div className="bg-pink-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300">
      <h3 className="text-xl font-semibold text-pink-700 mb-2">
        {t(`services_data.${service.id}.title`)}
      </h3>
      <p className="text-gray-600 mb-4">
        {t(`services_data.${service.id}.description`)}
      </p>
      <a
        href={`/services/${service.id}`}
        className="inline-block bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-400 transition"
      >
        {t("discover_button")}
      </a>
    </div>
  );
}
