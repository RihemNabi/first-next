import { Service } from "../../../types/service";
import { services } from "../../../data/services";
import ServiceDetailClient from "../../../components/ServiceDetailClient";

interface Props {
  params: {
    id: string;
  };
}

export default function ServicesPage({ params }: Props) {
  const service: Service | undefined = services.find((s) => s.id === params.id);

  if (!service) {
    return <p className="text-red-500 p-6">Service not found.</p>;
  }

  return <ServiceDetailClient service={service} />;
}
