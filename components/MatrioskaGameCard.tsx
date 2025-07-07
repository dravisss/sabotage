import React from "react";
import Link from "next/link";

export default function MatrioskaGameCard() {
  return (
    <div className="mt-10 bg-white border border-zinc-300 shadow-lg rounded-xl p-8 flex flex-col items-center transition hover:scale-[1.02] hover:shadow-2xl duration-200">
      <h2 className="text-3xl font-bold text-zinc-800 mb-2 font-title">🎲 Jogo Matrioska</h2>
      <p className="text-lg text-zinc-700 mb-4 text-center max-w-2xl">
        Um jogo e uma experiência narrativa para quem leva o Manual de Sabotagem sarcasticamente à sério. <br />
        <span className="font-semibold text-zinc-800">Descubra como sabotar (ou ser sabotado) de formas criativas!</span>
      </p>
      <Link href="/matrioska" legacyBehavior>
        <a className="inline-block bg-zinc-900 text-white px-6 py-3 rounded-lg font-bold shadow hover:bg-zinc-700 transition-colors duration-200">
          Saiba mais e inscreva-se
        </a>
      </Link>
    </div>
  );
}
