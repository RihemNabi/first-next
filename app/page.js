"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-pink-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full text-center p-6">
        <img
          src="/rose.png"
          alt="pdp"
          className="w-32 h-32 mx-auto rounded-full border-4 border-pink-200 mb-4"
        />
        <h1 className="text-2xl font-bold text-pink-700"> Mini - Projet </h1>{" "}
        <p className="text-pink-600 mt-2"> Bienvenue sur ma page d 'acceuil </p>{" "}
        <div className="mt-6 flex flex-col gap-3">
          <a
            href="/apropos"
            className="bg-pink-300 hover:bg-pink-400 text-white py-2 px-4 rounded-lg"
          >
            A Propos{" "}
          </a>{" "}
          <a
            href="/services"
            className="bg-pink-300 hover:bg-pink-400 text-white py-2 px-4 rounded-lg"
          >
            Nos services {""}{" "}
          </a>{" "}
          <a
            href="/contact"
            className="bg-pink-200 hover:bg-pink-300 text-pink-800 py-2 px-4 rounded-lg"
          >
            Contactez - nous{" "}
          </a>{" "}
          <a
            href="/autre"
            className="bg-pink-100 hover:bg-pink-200 text-pink-700 py-2 px-4 rounded-lg"
          >
            Autres{" "}
          </a>{" "}
        </div>{" "}
        <p className="text-sm text-gray-500 mt-6"> 🌷 Merci de votre visite!</p>{" "}
      </div>{" "}
    </main>
  );
}
