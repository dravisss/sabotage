'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { sabotageLevels, SabotageLevel } from '@/lib/quiz-content';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Linkedin, MessageCircle, Copy } from 'lucide-react';
import Head from 'next/head'; // Para meta tags dinâmicas

// Componente interno para evitar que a página inteira seja Suspense boundary
function QuizResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [level, setLevel] = useState<SabotageLevel | null>(null);
  const [totalScoreParam, setTotalScoreParam] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [pageUrl, setPageUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPageUrl(window.location.href);
    }

    const score = searchParams.get('score');
    setTotalScoreParam(score);

    let determinedLevel: SabotageLevel | null = null;
    if (score) {
      const numericScore = parseInt(score, 10);
      if (!isNaN(numericScore)) {
        for (const sl of sabotageLevels) {
          if (numericScore >= sl.minScore && numericScore <= sl.maxScore) {
            determinedLevel = sl;
            break;
          }
        }
      }
    }
    
    if (determinedLevel) {
      setLevel(determinedLevel);
    } else {
      // Opcional: redirecionar para o quiz se não houver score ou nível válido
      // router.push('/manual/sabotador-interno'); 
    }
  }, [searchParams, router]);

  if (!level) {
    // Pode mostrar um loader ou uma mensagem, ou redirecionar
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl font-sans text-zinc-700">Carregando resultado...</p>
      </div>
    );
  }

  const siteUrl = typeof window !== 'undefined' ? `${window.location.protocol}//${window.location.host}` : 'https://seusite.com';
  const imageUrl = `${siteUrl}/images/${level.imageFileName}`;

  // --- Share Functions ---
  const generateShareText = () => {
    return `Meu nível de Entropia Organizacional é: ${level.title}! ✨ Descubra o seu no Teste de Potencial de Entropia:`;
  };

  const shareOnWhatsApp = () => {
    const text = encodeURIComponent(`${generateShareText()} ${pageUrl}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    const url = encodeURIComponent(pageUrl);
    // LinkedIn prefere que o título e descrição venham das meta tags da URL compartilhada
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  };

  const copyToClipboard = () => {
    const textToCopy = `${generateShareText()} ${pageUrl}\n\nLema: &quot;${level.lema}&quot;\n${level.emoji}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  // --- End Share Functions ---

  return (
    <>
      <Head>
        <title>{`${level.title} | Resultado do Quiz de Entropia`}</title>
        <meta name="description" content={`${level.lema}. ${level.description.substring(0, 150)}...`} />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={`${level.title} - Meu Nível de Entropia Organizacional!`} />
        <meta property="og:description" content={level.description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:alt" content={`Imagem representando o nível ${level.title}`} />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={pageUrl} />
        <meta property="twitter:title" content={`${level.title} - Meu Nível de Entropia Organizacional!`} />
        <meta property="twitter:description" content={level.description} />
        <meta property="twitter:image" content={imageUrl} />
      </Head>
      <div className="container mx-auto px-4 py-8 flex flex-col items-center font-sans">
        <Card className="w-full max-w-2xl my-8 shadow-xl bg-card text-center">
          <CardHeader>
            <CardTitle className="text-4xl font-title text-destructive">Seu Resultado!</CardTitle>
            <CardDescription className="text-zinc-600 text-lg">Nível de maestria em sabotagem:</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-7xl my-4">{level.emoji}</div>
            <h2 className="text-3xl font-title text-red-700">{level.title}</h2>
            <p className="text-zinc-800 italic text-lg">Lema: &quot;{level.lema}&quot;</p>
            <p className="text-zinc-700 text-justify leading-relaxed">{level.description}</p>
            {totalScoreParam && <p className="font-bold text-zinc-800 text-xl">Sua Pontuação: {totalScoreParam}</p>}
            
            <div className="pt-6">
              <p className="text-lg font-semibold text-zinc-700 mb-3">Compartilhe seu resultado:</p>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                <Button onClick={shareOnWhatsApp} variant="outline" className="flex items-center gap-2 border-green-500 text-green-600 hover:bg-green-50">
                  <MessageCircle size={20} /> WhatsApp
                </Button>
                <Button onClick={shareOnLinkedIn} variant="outline" className="flex items-center gap-2 border-blue-600 text-blue-700 hover:bg-blue-50">
                  <Linkedin size={20} /> LinkedIn
                </Button>
                <Button onClick={copyToClipboard} variant="outline" className="flex items-center gap-2 border-zinc-500 text-zinc-600 hover:bg-zinc-100">
                  <Copy size={20} /> {copied ? "Copiado!" : "Copiar Link"}
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <Button onClick={() => router.push('/manual/sabotador-interno')} variant="outline" className="font-title border-red-600 text-red-600 hover:bg-red-50">
              Fazer o Teste Novamente
            </Button>
            <Button onClick={() => router.push('/manual')} variant="default" className="font-title bg-zinc-700 hover:bg-zinc-800 text-white">
              Explorar o Manual
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

// Adicionando Suspense Boundary para useSearchParams
export default function QuizResultPage() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center min-h-screen"><p className="text-xl font-sans text-zinc-700">Carregando...</p></div>}>
      <QuizResultContent />
    </Suspense>
  );
}
