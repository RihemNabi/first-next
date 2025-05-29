import Link from "next/link";
export default function AutrePage() {
  return (
    <div className="min-h-screen bg-pink-50 p-6 text-center flex flex-col items-center justify-start pt-20">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-xl">
        <h1 className="text-4xl font-bold text-pink-700 mb-8">Autres infos</h1>
        <h2 className="text-xl font-semibold text-pink-600 mb-4">
          🔗 Liens utiles
        </h2>
        <ul className="text-left text-gray-700  space-y-1">
          <li>
            🗂️ Code source :{" "}
            <Link
              href="https://github.com/RihemNabi/first-next"
              target="_blank"
              className="underline"
            >
              GitHub
            </Link>
          </li>
          <li>
            🌐 Projet en ligne :{" "}
            <Link
              href="https://first-next-theta-sand.vercel.app"
              target="_blank"
              className="underline"
            >
              Vercel
            </Link>
          </li>
        </ul>

        <hr className="my-6" />

        <h2 className="text-xl font-semibold text-pink-600 mb-2">
          📚 Ressources étudiées
        </h2>
        <ul className="text-gray-700 text-left list-disc ml-6 space-y-1">
          <li>
            📄Documentation officielle :{" "}
            <span className="text-blue-900 underline">
              <a href="https://tailwindcss.com/docs" target="_blank">
                Tailwind CSS
              </a>
            </span>
          </li>
          <li>
            🎥 Vidéos pédagogiques sur YouTube concernant <em>Next.js</em> et{" "}
            <em>Node.js</em>
          </li>
          <li>
            🛠️ Pratique de Git & GitHub pour la gestion de version et Vercel
            pour le déploiement
          </li>
          <li>💡 Résolution d'erreurs en environnement réel</li>
        </ul>

        <hr className="my-6" />
        <div className=" bg-pink-100 rounded-lg shadow-md ">
          <p className="italic text-gray-600 mt-6">
            🌸 Ce mini-projet s’agit d’un tout petit projet de
            test/apprentissage, conçu pour expérimenter et progresser à mon
            rythme .
            <br />
            🌟 m’a permis de développer mes compétences, de résoudre des erreurs
            réelles et de me sentir plus à l’aise avec les outils mentionnés
          </p>
        </div>
      </div>
      <p className="mt-8 text-sm text-gray-700">
        pour any questions ,{" "}
        <Link
          href="/contact"
          className="text-pink-600 underline hover:text-pink-800 transition duration-200"
        >
          contactez-nous
        </Link>
      </p>
    </div>
  );
}
