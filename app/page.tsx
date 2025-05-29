'use client';

import { TypewriterText } from '@/components/TypewriterText';
import HomeIntro from '@/components/HomeIntro';
import ManualSectionsGallery from '@/components/ManualSectionsGallery';
import NewsletterSignup from '@/components/NewsletterSignup';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#f5f5f0]">
      <main className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8 font-title">
        <h1 className="font-title text-5xl font-bold text-zinc-800 text-center font-mono mt-0 mb-1">
          <TypewriterText text="Manual de Sabotagem Corporativa" />
        </h1>
        <p className="text-xl italic text-zinc-600 text-center font-mono mb-8">
          <TypewriterText text="Como destruir sua organização com classe" delay={1200} />
        </p>
        <img
          src="/images/capa.png"
          alt="Capa do Manual de Sabotagem Corporativa"
          className="mx-auto mb-8 max-w-full h-auto"
          style={{ maxHeight: 360 }}
        />
        <HomeIntro />
        <ManualSectionsGallery />
        <div className="mt-12">
          <div className="mt-10 bg-zinc-50 border border-zinc-300 text-zinc-600 shadow rounded-lg p-6 w-full">
            <div className="font-bold text-zinc-800 text-base mb-2 flex items-center gap-2">⚠️ ALERTA DE ALTA IMPRODUTIVIDADE:</div>
            <div className="text-zinc-700">
              Este manual é uma obra de ficção satírica e crítica social. Seu propósito é o entretenimento e a reflexão sobre as disfunções do mundo corporativo. <strong>NÃO TENTE ISSO NA SUA EMPRESA (vocês já fazem sozinhos, afinal).</strong> Os autores não se responsabilizam por demissões, olhares tortos do RH ou convites para liderar comitês de &apos;melhoria contínua&apos; após a leitura. Leia por sua conta e risco... e divirta-se com a tragédia cotidiana.
            </div>
          </div>
        </div>
        <NewsletterSignup />
      </main>
    </div>
  );
}
