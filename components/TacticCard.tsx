'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from './ui/card';
import { TacticCardData } from '@/lib/manual-content';

interface TacticCardProps {
  tactic: TacticCardData;
}

export const TacticCard: React.FC<TacticCardProps> = ({ tactic }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card
      className={`transition-all duration-300 cursor-pointer overflow-hidden ${expanded ? 'shadow-2xl bg-white scale-[1.03]' : 'hover:scale-[1.01]'} border border-zinc-200 mb-6`}
      onClick={() => setExpanded((v) => !v)}
      aria-expanded={expanded}
    >
      <CardHeader className="flex flex-row items-center gap-4 px-5 py-4">
        {tactic.icon && (
          <span className="text-4xl mr-2 select-none" aria-label="ícone da tática">{tactic.icon}</span>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-title text-xl sm:text-2xl font-bold text-zinc-800 truncate">{tactic.title}</span>
            <span className={`ml-auto px-2 py-1 rounded-full text-xs font-bold uppercase shadow ${tactic.level.includes('Drástica') ? 'bg-red-200 text-red-800' : 'bg-red-100 text-red-700'}`}>{tactic.level}</span>
          </div>
          <div className="text-zinc-500 italic text-base truncate font-title">{tactic.subtitle}</div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs text-zinc-500 font-title">Dano à Produtividade:</span>
            {Array.from({ length: tactic.damageLevel || 1 }).map((_, i) => (
              <span key={i} className="text-lg">🩸</span>
            ))}
          </div>
          {tactic.dangerTags && (
            <div className="flex flex-wrap gap-2 mt-2">
              {tactic.dangerTags.map((tag, i) => (
                <span key={i} className="px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded text-xs font-semibold border border-yellow-200">{tag}</span>
              ))}
            </div>
          )}
        </div>
      </CardHeader>
      {expanded && (
        <CardContent className="px-5 pb-5 pt-1 space-y-5 animate-fade-in font-title">
          <div>
            <p className="font-semibold text-zinc-700 mb-1 font-title">Modus Operandi:</p>
            {Array.isArray(tactic.modusOperandi) ? (
              <ul className="list-decimal list-inside text-zinc-700 space-y-1 pl-2 font-title">
                {tactic.modusOperandi.map((step, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: step }} />
                ))}
              </ul>
            ) : (
              <p className="text-zinc-700 font-title" dangerouslySetInnerHTML={{ __html: tactic.modusOperandi }} />
            )}
          </div>
          <div>
            <p className="font-semibold text-zinc-700 mb-1 font-title">Efeitos Colaterais Esperados:</p>
            <ul className="list-disc list-inside text-zinc-600 space-y-1 pl-2 font-title">
              {tactic.effects.map((effect, index) => (
                <li key={index}>{effect}</li>
              ))}
            </ul>
          </div>
          {tactic.antidote && (
            <div>
              <p className="font-semibold text-green-800 mb-1 font-title">Como Identificar e Neutralizar:</p>
              <blockquote className="pl-3 border-l-4 border-green-400 italic text-green-900 bg-green-50 rounded font-title">
                {tactic.antidote}
              </blockquote>
            </div>
          )}
          {tactic.tags && (
            <div className="flex flex-wrap gap-2 mt-4">
              {tactic.tags.map((tag, i) => (
                <span key={i} className="px-2 py-0.5 bg-zinc-200 text-zinc-700 rounded text-xs font-mono">{tag}</span>
              ))}
            </div>
          )}
        </CardContent>
      )}
    </Card>
  );
};
