export default function ServiceCard({ service }) {
  if (!service) return null; // (optionnel : sécurité)

  return (
    <div className="bg-pink-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300">
      <h3 className="text-xl font-semibold text-pink-700 mb-2">
        {service.title}
      </h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <a
        href={`/services/${service.id}`}
        className="inline-block bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-400 transition"
      >
        Découvrir
      </a>
    </div>
  );
}
