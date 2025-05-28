"use client";

export default function AproposPage() {
  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-xl p-8 max-w-2xl w-full text-center">
        <h1 className="text-3xl font-bold text-pink-700 mb-4">
          À propos du projet
        </h1>
        <p className="text-gray-700 mb-4">
          Ce mini-projet a été réalisé dans le cadre de mon stage chez{" "}
          <strong>NA Consulting</strong>, dans le but de me familiariser avec
          les technologies modernes du développement web.
        </p>
        <p className="text-gray-700 mb-4">Les objectifs principaux sont :</p>
        <ul className="text-left text-gray-700 list-disc list-inside mb-4">
          <li>
            Apprendre à utiliser <strong>Next.js</strong> pour structurer une
            application
          </li>
          <li>
            Styliser avec <strong>Tailwind CSS</strong> pour un rendu moderne
          </li>
          <li>
            Gérer le projet avec <strong>GitHub</strong>
          </li>
        </ul>
        <p className="text-gray-600 italic">
          Ce mini-projet est un reflet de mon apprentissage quotidien.
        </p>
      </div>
    </div>
  );
}
