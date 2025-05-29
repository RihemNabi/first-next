import Reclamation from "../../components/réclamation";
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center text-center p-6 pt-20">
      <h1 className="text-4xl font-bold text-pink-700 mb-4">Contactez-moi</h1>
      <p className="text-lg text-gray-700 mb-2">
        Vous pouvez me joindre à :{" "}
        <span className="font-medium">rihem.nebi@nac.tn</span>
      </p>
      <p className="text-lg text-gray-700 mb-6">
        Ou passer me voir à <span className="font-semibold">NA Consulting</span>{" "}
        📍
      </p>
      <Reclamation />
    </div>
  );
}
