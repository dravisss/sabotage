"use client";
import React, { useState, useEffect } from 'react';

interface NewsletterSignupProps {
  onSuccess?: () => void;
}

export default function NewsletterSignup({ onSuccess }: NewsletterSignupProps) {
  const [alreadyUnlocked, setAlreadyUnlocked] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const [forceRender, setForceRender] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      const unlocked = localStorage.getItem('hasUnlockedPremiumContent');
      if (unlocked === 'true') {
        setAlreadyUnlocked(true);
      }
    }
  }, []);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  // Honeypot
  const [honeypot, setHoneypot] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, honeypot }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        localStorage.setItem('hasUnlockedPremiumContent', 'true');
        setAlreadyUnlocked(true);
        setForceRender(!forceRender);
        setSuccess(true);
        setEmail('');
        if (onSuccess) {
          onSuccess();
        }
      } else if (data.error && data.error.includes('duplicate')) {
        // Se já está cadastrado, liberar igual
        setSuccess(true);
        setEmail('');
        if (onSuccess) {
          onSuccess();
        }
      } else {
        setError(data.error || 'Erro ao cadastrar. Tente novamente.');
      }
    } catch {
      setError('Erro ao conectar. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Inscrição realizada com sucesso!</h2>
        <p className="text-gray-300">Você já pode acessar todo o conteúdo do manual.</p>
      </div>
    );
  }

  if (mounted && alreadyUnlocked) {
    return null;
  }

  return (
    <div className="mt-12 p-6 bg-zinc-50 border border-zinc-200 rounded-lg shadow max-w-xl mx-auto">
      <h2 className="font-title text-2xl font-bold mb-2 text-red-700">Clube dos Agentes de Mudança</h2>
      <p className="text-zinc-700 mb-4">
        Entre para o <b>Clube dos Agentes de Mudança</b> da Target Teal e tenha acesso imediato aos nossos livros, artigos e metodologias e uma comunidade que ajuda você a transformar organizações.<br />
        <b>Já faz parte? Só colocar seu e-mail novamente para liberar o acesso!</b> 
      </p>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit} autoComplete="off">
        {/* Honeypot field (hidden from users, visible to bots) */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <label>
            Não preencha este campo:
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={e => setHoneypot(e.target.value)}
            />
          </label>
        </div>
        {/* resto do formulário permanece igual */}
        <input
          type="text"
          required
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Seu nome"
          className="border border-zinc-300 rounded px-4 py-2 focus:ring-2 focus:ring-red-400 outline-none text-red-700 placeholder:text-red-300"
          disabled={loading}
        />
        <input
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Seu e-mail"
          className="border border-zinc-300 rounded px-4 py-2 focus:ring-2 focus:ring-red-400 outline-none text-red-700 placeholder:text-red-300"
          disabled={loading}
        />
        <label className="flex items-start gap-2 text-xs text-zinc-700">
          <input
            type="checkbox"
            required
            checked={consent}
            onChange={e => setConsent(e.target.checked)}
            disabled={loading}
          />
          <span>
            Concordo com o tratamento dos meus dados pessoais para fins de envio de comunicações da Target Teal, conforme a <a href="/privacidade" target="_blank" rel="noopener noreferrer" className="underline">Política de Privacidade</a> e a LGPD. Posso cancelar a inscrição a qualquer momento.
          </span>
        </label>
        <button
          type="submit"
          className="bg-red-700 text-white font-bold py-2 rounded hover:bg-red-800 transition disabled:opacity-60"
          disabled={loading || !consent}
        >
          {loading ? 'Enviando...' : 'Quero me inscrever'}
        </button>
      </form>
      {success && (
        <p className="text-green-600 mt-2">Inscrição realizada com sucesso! <b>Confira seu e-mail e clique no link mágico para liberar o conteúdo.</b></p>
      )}
      {error && (
        <p className="text-red-600 mt-2">{error}</p>
      )}
      <p className="text-xs text-zinc-500 mt-4">Você pode sair do clube quando quiser. Respeitamos sua privacidade.</p>
    </div>
  );
}
