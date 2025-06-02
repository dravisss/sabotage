'use client';

import React, { useState, useRef } from 'react';
import { Card, CardHeader, CardContent } from './ui/card';
import { TacticCardData } from '@/lib/manual-content';
import { toPng } from 'html-to-image';
import { Copy, Image as ImageIcon } from 'lucide-react';

interface TacticCardProps {
  tactic: TacticCardData;
}

// TooltipButton: botão com tooltip simples ao passar o mouse
const TooltipButton: React.FC<{ onClick: (e: React.MouseEvent) => void; label: string; children: React.ReactNode }> = ({ onClick, label, children }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative flex">
      <button
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
        onClick={onClick}
        className="p-1 bg-white hover:bg-gray-200 rounded shadow"
        aria-label={label}
        type="button"
      >
        {children}
      </button>
      {show && (
        <span className="absolute bottom-full right-1/2 translate-x-1/2 mb-1 px-2 py-1 rounded bg-zinc-800 text-xs text-white whitespace-nowrap shadow-lg z-10">
          {label}
        </span>
      )}
    </div>
  );
};

export const TacticCard: React.FC<TacticCardProps> = ({ tactic }) => {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleExpand = () => {
    setExpanded((v) => !v);
    if (!expanded) {
      // Só conta se for a primeira vez que expande esse card
      const clicked = JSON.parse(localStorage.getItem('tacticClicked') || '[]');
      if (!clicked.includes(tactic.title)) {
        const updated = [...clicked, tactic.title];
        localStorage.setItem('tacticClicked', JSON.stringify(updated));
        let clicks = Number(localStorage.getItem('tacticClicks') || 0);
        clicks++;
        localStorage.setItem('tacticClicks', clicks.toString());
        if (clicks === 3) {
          localStorage.setItem('showNewsletterModal', 'true');
        }
      }
    }
  };

  const handleCopyText = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const text = `
${tactic.title}
${tactic.subtitle}

Modus Operandi:
${Array.isArray(tactic.modusOperandi) ? tactic.modusOperandi.join('\n') : tactic.modusOperandi}

Efeitos:
${tactic.effects.join('\n')}

Antídoto:
${tactic.antidote || ''}

Tags: ${tactic.tags?.join(', ')}
`;
    const attributionText = "\n\n---\nCopiado de sabotagemcorporativa.org\nFeito com 💙 pela Target Teal";
    await navigator.clipboard.writeText(text + attributionText);
  };

  const handleCopyImage = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!cardRef.current) return;
    try {
      const dataUrl = await toPng(cardRef.current, { cacheBust: true, backgroundColor: '#ffffff' });

      const img = new Image();
      img.src = dataUrl;
      // Wait for the image to load before using its dimensions
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      });

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        console.error('Failed to get canvas context');
        return;
      }

      const paddingBottom = 45; // Increased padding for two lines of text
      const attributionLine1 = "Copiado de sabotagemcorporativa.org";
      const attributionLine2 = "Feito com 💙 pela Target Teal";
      const fontSize = 14;
      const lineHeight = fontSize * 1.3; // Adjusted line height

      canvas.width = img.width;
      canvas.height = img.height + paddingBottom;

      // Fill background for the new space (important if original card has transparency or for consistency)
      ctx.fillStyle = '#ffffff'; // Match the card's capture background
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw the original card image
      ctx.drawImage(img, 0, 0);

      // Prepare to draw text
      ctx.fillStyle = '#222222'; // Darker grey for better readability
      ctx.font = `${fontSize}px sans-serif`;
      ctx.textAlign = 'center';

      // Draw the first line of attribution
      ctx.fillText(attributionLine1, canvas.width / 2, img.height + lineHeight);
      // Draw the second line of attribution
      ctx.fillText(attributionLine2, canvas.width / 2, img.height + lineHeight * 2);

      // Get the new image with attribution
      const finalDataUrl = canvas.toDataURL('image/png');
      const response = await fetch(finalDataUrl);
      const blob = await response.blob();
      const item = new ClipboardItem({ 'image/png': blob });
      await navigator.clipboard.write([item]);
    } catch (err) {
      console.error('Failed to copy image', err);
    }
  };

  // Função para baixar imagem
  const handleDownloadImage = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!cardRef.current) return;
    try {
      const dataUrl = await toPng(cardRef.current, { cacheBust: true, backgroundColor: '#ffffff' });
      const img = new Image();
      img.src = dataUrl;
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      });
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      const paddingBottom = 45;
      const attributionLine1 = "Copiado de sabotagemcorporativa.org";
      const attributionLine2 = "Feito com 💙 pela Target Teal";
      const fontSize = 14;
      const lineHeight = fontSize * 1.3;
      canvas.width = img.width;
      canvas.height = img.height + paddingBottom;
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
      ctx.fillStyle = '#222222';
      ctx.font = `${fontSize}px sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText(attributionLine1, canvas.width / 2, img.height + lineHeight);
      ctx.fillText(attributionLine2, canvas.width / 2, img.height + lineHeight * 2);
      const finalDataUrl = canvas.toDataURL('image/png');
      // Trigger download
      const a = document.createElement('a');
      a.href = finalDataUrl;
      a.download = `${tactic.title.replace(/\s+/g, '_').toLowerCase()}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (err) {
      console.error('Failed to download image', err);
    }
  };

  return (
    <Card
      ref={cardRef}
      className={`relative bg-white transition-all duration-300 cursor-pointer overflow-hidden ${expanded ? 'shadow-2xl scale-[1.03]' : 'hover:scale-[1.01]'} border border-zinc-200 mb-6`}
      onClick={handleExpand}
      aria-expanded={expanded}
    >
      <CardHeader className="flex flex-row items-center gap-4 px-5 py-4">
        {tactic.icon && (
          <span className="text-4xl mr-2 select-none" aria-label="ícone da tática">{tactic.icon}</span>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-title text-xl sm:text-2xl font-bold text-zinc-800 truncate">{tactic.title}</span>
            <span className={`px-2 py-1 rounded-full text-xs font-bold uppercase shadow ${tactic.level.includes('Drástica') ? 'bg-red-200 text-red-800' : 'bg-red-100 text-red-700'}`}>{tactic.level}</span>
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
        <>
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
                <p className="font-semibold text-green-800 mb-1 font-title">Antídoto:</p>
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
<div className="absolute bottom-2 right-[12px] flex gap-2" onClick={(e: React.MouseEvent) => e.stopPropagation()}>
            {/* Ajuste visual: gap maior da borda direita */}
            <TooltipButton onClick={handleCopyText} label="Copiar texto">
              <Copy size={16} />
            </TooltipButton>
            <TooltipButton onClick={handleCopyImage} label="Copiar imagem">
              <ImageIcon size={16} />
            </TooltipButton>
<TooltipButton onClick={handleDownloadImage} label="Baixar imagem">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            </TooltipButton>
          </div>
        </>
      )}
    </Card>
  );
};
