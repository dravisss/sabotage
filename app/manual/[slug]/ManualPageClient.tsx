"use client";

import { useState, useEffect } from 'react';
import { ManualSection, tacticsMap, TacticCardData } from '@/lib/manual-content'; 
import SectionContentWrapper from '@/components/SectionContentWrapper';
import NewsletterSignupBlock from './NewsletterSignupBlock'; // Make sure this is client-compatible
import { TacticCard } from '@/components/TacticCard';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import SectionStoriesBlock from '@/components/SectionStoriesBlock'; // Make sure this is client-compatible
import NewsletterModal from '@/components/NewsletterModal';

interface ManualPageClientProps {
  section: ManualSection;
  slug: string;
}

export default function ManualPageClient({ section: initialSection, slug: initialSlug }: ManualPageClientProps) {
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    let unsubscribe: (() => void) | undefined;
    import('@/lib/supabaseClient').then(({ supabase }) => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setIsAuthenticated(!!session);
        setShowNewsletterModal(!session);
      });
      const { data: listener } = supabase.auth.onAuthStateChange((_event: string, session: import('@supabase/supabase-js').Session | null) => {
        setIsAuthenticated(!!session);
        setShowNewsletterModal(!session);
      });
      unsubscribe = () => listener.subscription.unsubscribe();
    });
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  if (!initialSection || !initialSlug) {
    return <div className="min-h-screen flex items-center justify-center"><p>Erro: Conteúdo da seção não pôde ser carregado.</p></div>; 
  }

  const { Icon: DisclaimerIcon } = initialSection.disclaimer || {};
  const { Icon: FinalDisclaimerIcon } = initialSection.finalDisclaimer || {};

  return (
    <SectionContentWrapper>
      <article className="space-y-8">
        <header>
          <h1 className="font-title text-4xl font-bold text-zinc-800 mb-2">
            {initialSection.pageTitle}
          </h1>
          {initialSection.introSubtitle && (
            <p className="font-title text-xl text-zinc-600 italic">
              {initialSection.introSubtitle}
            </p>
          )}
        </header>

        <div className="space-y-6 text-zinc-700 leading-relaxed font-title">
          {initialSection.introParagraphs.map((paragraph: string, index: number) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
        </div>

        {initialSection.disclaimer && (
          <Alert variant="destructive" className="bg-red-100 border-red-500 text-red-700 font-title">
            {DisclaimerIcon && <DisclaimerIcon className="h-5 w-5 mr-2 text-red-800" />}
            <AlertTitle className="font-bold text-red-800 font-title">
              {initialSection.disclaimer.title}
            </AlertTitle>
            <AlertDescription dangerouslySetInnerHTML={{ __html: initialSection.disclaimer.description }} className="font-title" />
          </Alert>
        )}

        {initialSection.tacticsKey &&
          ["reunioes", "comunicacao", "processos", "tecnologia", "gestao-tempo", "cultura"].includes(initialSection.tacticsKey) &&
          Array.isArray(tacticsMap[initialSection.tacticsKey as keyof typeof tacticsMap]) && (
          <div className="flex flex-col gap-6">
            {(tacticsMap[initialSection.tacticsKey as keyof typeof tacticsMap] as TacticCardData[]).map((tactic: TacticCardData, idx: number) => (
              <TacticCard
                key={idx}
                tactic={tactic}
                isLocked={!isAuthenticated && idx > 2}
                onRequestUnlock={() => setShowNewsletterModal(true)}
              />
            ))}
          </div>
        )}

        <NewsletterSignupBlock />

        <SectionStoriesBlock
          sectionId={initialSlug}
          sectionTitle={initialSection.pageTitle}
          sectionUrl={`https://sabotagemcorporativa.org/manual/${initialSlug}`}
        />

        {initialSection.finalDisclaimer && (
           <Alert variant="destructive" className="bg-red-100 border-red-500 text-red-700 mt-12">
            {FinalDisclaimerIcon && <FinalDisclaimerIcon className="h-5 w-5 mr-2 text-red-800" />}
            <AlertTitle className="font-bold text-red-800">
              {initialSection.finalDisclaimer.title}
            </AlertTitle>
            <AlertDescription>
              <div className="space-y-4">
                <p>
                  Os fenômenos descritos neste manual não são apenas fruto de escolhas ou falhas individuais, mas refletem padrões e dinâmicas sistêmicas presentes nas organizações. Para transformar essas realidades, é necessário olhar para além do comportamento das pessoas e repensar as estruturas, regras e incentivos que moldam o dia a dia corporativo.
                </p>
                <p>
                  Se você deseja se aprofundar no mundo do design organizacional e aprender como mudar as regras dos jogos viciados nas organizações, continue sua jornada de aprendizado conosco. Existem caminhos para criar ambientes menos chatos e obcecados por controle - e eles começam pelo entendimento crítico do sistema.
                </p>
              </div>
            </AlertDescription>
          </Alert>
        )}
 
        {showNewsletterModal && (
          <NewsletterModal
            isOpen={showNewsletterModal}
            onClose={() => setShowNewsletterModal(false)}
            onSuccess={() => {
              setShowNewsletterModal(false);
            }}
          />
        )}
      </article>
      {/* SectionNavigation is now rendered by the parent server component */}
    </SectionContentWrapper>
  );
}
