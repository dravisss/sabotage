"use client";
import { useEffect, useState } from "react";
import ScriptDisqus from "./ScriptDisqus";

interface SectionStoriesProps {
  sectionId: string;
  sectionTitle: string;
  sectionUrl: string;
}

export default function SectionStories({ sectionId, sectionTitle, sectionUrl }: SectionStoriesProps) {
  const [disqusLoaded, setDisqusLoaded] = useState(false);
  // Para testar, troque para 'example'
const shortname = "sabotagem-corporativa";

  useEffect(() => {
    // Detecta se o Disqus foi injetado
    const timer = setTimeout(() => {
      const iframe = document.querySelector('iframe[id*="dsq-app"]');
      if (iframe) setDisqusLoaded(true);
      else setDisqusLoaded(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [sectionId, sectionUrl]);

  return (
    <div className="mt-16 mb-10">
      <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-6 mb-6 shadow-sm">
        <h2 className="text-2xl font-bold text-yellow-800 mb-2 font-title">Compartilhe seu caos corporativo!</h2>
        <p className="text-yellow-900 text-base font-title mb-2">
          Tem algum <span className="font-semibold">causo real</span> ou história engraçada sobre essas táticas de sabotagem? Já presenciou ou viveu algo parecido na sua empresa?
        </p>
        <p className="text-yellow-900 text-base font-title">
          Conte sua experiência nos comentários abaixo e ajude a mostrar que a vida corporativa é mesmo cheia de roteiros inacreditáveis. Sua história pode inspirar (ou alertar) outros agentes de mudança!
        </p>
      </div>
      <div id="disqus_thread"></div>
      {/* DEBUG: Mostra os valores das props do Disqus */}
      <div className="bg-red-50 text-red-700 text-xs p-2 mb-2 rounded border border-red-200">
        <strong>DEBUG Disqus:</strong><br />
        <span>sectionUrl: <code>{sectionUrl}</code></span><br />
        <span>sectionId: <code>{sectionId}</code></span><br />
        <span>sectionTitle: <code>{sectionTitle}</code></span>
      </div>
      {typeof window !== 'undefined' && console.log('[SectionStories] DEBUG', { sectionUrl, sectionId, sectionTitle })}

      {/* Embed puro do Disqus */}
      <ScriptDisqus
        shortname={shortname}
        url={sectionUrl}
        identifier={sectionId}
        title={sectionTitle}
      />
      {!disqusLoaded && (
        <div className="mt-4 text-center text-sm text-zinc-500">
          <p>Os comentários não carregaram? Verifique o shortname do Disqus, desative bloqueadores de anúncios ou teste com o shortname <code>example</code> para debug.</p>
        </div>
      )}
    </div>
  );
}
