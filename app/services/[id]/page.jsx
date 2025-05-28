import ServiceAction from "../../../components/serviceAction";
import { services } from "../../../data/services";
export default function ServicesPage({ params }) {
  const service = services.find((s) => s.id == params.id);

  return (
    <div>
      <h2>{service.title}</h2>
      <p>{service.description}</p>
      <ServiceAction />
    </div>
  );
}
