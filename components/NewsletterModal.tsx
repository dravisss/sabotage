"use client";
import React, { useState, useEffect } from 'react';
import NewsletterSignup from './NewsletterSignup';

export default function NewsletterModal() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Abre por intenção de saída
    const handleMouseOut = (e: MouseEvent) => {
      if (!dismissed && e.clientY < 10) {
        setOpen(true);
      }
    };
    document.addEventListener('mouseout', handleMouseOut);
    // Abre por flag do localStorage
    if (!dismissed && typeof window !== 'undefined') {
      if (localStorage.getItem('showNewsletterModal') === 'true') {
        setOpen(true);
        localStorage.removeItem('showNewsletterModal');
      }
    }
    return () => document.removeEventListener('mouseout', handleMouseOut);
  }, [dismissed]);

  if (!open || dismissed) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
        <button
          onClick={() => { setOpen(false); setDismissed(true); }}
          className="absolute top-2 right-2 text-zinc-500 hover:text-zinc-800 text-2xl font-bold"
          aria-label="Fechar"
        >×</button>
        <h2 className="text-xl font-bold text-red-700 mb-2 font-title">Vai sair sem seu kit de sabotagem?</h2>
        <p className="mb-4 text-zinc-700">Cadastre-se e receba nossos melhores materiais, livros e táticas exclusivas para agentes de mudança.</p>
        <NewsletterSignup />
      </div>
    </div>
  );
}
