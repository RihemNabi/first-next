import ServiceAction from "../../../components/serviceAction";
import ServiceCard from "../../../components/serviceCard";

import { services } from "../../../data/services";
export default function ServicesPage({ params }) {
  const service = services.find((s) => s.id == params.id);

  return (
    <div className="max-w-3xl mx-auto bg-pink-50 p-6 rounded-lg shadow-md mt-8">
      <h2 className="text-2xl font-bold text-pink-700 mb-2">{service.title}</h2>
      <p className="text-gray-700 mb-4">{service.description}</p>

      <div className="mt-6">
        <ServiceCard />
        <ServiceAction />
      </div>
    </div>
  );
}
