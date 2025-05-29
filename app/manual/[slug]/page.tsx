import { getSectionData, ManualSection, tacticsMap, TacticCardData, sectionEmojis, manualSections as allManualSections } from '@/lib/manual-content'; 
import SectionContentWrapper from '@/components/SectionContentWrapper';
import NewsletterSignupBlock from './NewsletterSignupBlock';
import { TacticCard } from '@/components/TacticCard';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { notFound } from 'next/navigation';

export async function generateStaticParams(): Promise<{ slug: string }[]> { 
  // For Next.js to statically generate pages during build
  return allManualSections.map((section: ManualSection) => ({
    slug: section.slug,
  }));
}

// Define the props type for the page
interface ManualPageProps {
  params: Promise<{ slug: string }>;
}

// Make the component async.
async function ManualPage({ params }: ManualPageProps) { 
  const { slug } = await params; 
  const section: ManualSection | undefined = getSectionData(slug);

  if (!section) {
    notFound(); 
  }

  const { Icon: DisclaimerIcon } = section.disclaimer || {};
  const { Icon: FinalDisclaimerIcon } = section.finalDisclaimer || {};
  return (
    <SectionContentWrapper>
      <article className="space-y-8">
        <header>
        <h1 className="font-title text-4xl font-bold text-zinc-800 mb-2">
          {section.pageTitle}
        </h1>
        {section.introSubtitle && (
          <p className="font-title text-xl text-zinc-600 italic">
            {section.introSubtitle}
          </p>
        )}
      </header>

      <div className="space-y-6 text-zinc-700 leading-relaxed font-title">
        {section.introParagraphs.map((paragraph: string, index: number) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}
      </div>

      {section.disclaimer && (
        <Alert variant="destructive" className="bg-red-100 border-red-500 text-red-700 font-title">
          {DisclaimerIcon && <DisclaimerIcon className="h-5 w-5 mr-2 text-red-800" />}
          <AlertTitle className="font-bold text-red-800 font-title">
            {section.disclaimer.title}
          </AlertTitle>
          <AlertDescription dangerouslySetInnerHTML={{ __html: section.disclaimer.description }} className="font-title" />
        </Alert>
      )}

      {/* Renderizar todos os cards de táticas da seção, se houver */}
      {section.tacticsKey &&
        ["reunioes", "comunicacao", "processos", "tecnologia", "gestao-tempo", "cultura"].includes(section.tacticsKey) &&
        Array.isArray(tacticsMap[section.tacticsKey as keyof typeof tacticsMap]) && (
        <div className="flex flex-col gap-6">
          {(tacticsMap[section.tacticsKey as keyof typeof tacticsMap] as TacticCardData[]).map((tactic: TacticCardData, idx: number) => (
            <TacticCard key={idx} tactic={tactic} />
          ))}
        </div>
      )}


      {/* Bloco de inscrição de newsletter */}
      <NewsletterSignupBlock />

      {section.finalDisclaimer && (
         <Alert variant="destructive" className="bg-red-100 border-red-500 text-red-700 mt-12">
          {FinalDisclaimerIcon && <FinalDisclaimerIcon className="h-5 w-5 mr-2 text-red-800" />}
          <AlertTitle className="font-bold text-red-800">
            {section.finalDisclaimer.title}
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


      {/* Navegação entre seções e índice */}
      <div className="flex flex-col items-center gap-4 mt-14 mb-8">
        <SectionNavigation currentSlug={slug} />
      </div>
      </article>
    </SectionContentWrapper>
  );
}

export default ManualPage; 

// Navegação entre seções
function SectionNavigation({ currentSlug }: { currentSlug: string }) {
  const idx = allManualSections.findIndex((s) => s.slug === currentSlug);
  const prev = idx > 0 ? allManualSections[idx - 1] : null;
  const next = idx < allManualSections.length - 1 ? allManualSections[idx + 1] : null;

  return (
    <div className="flex justify-between w-full items-center">
      {prev && (
        <a href={`/manual/${prev.slug}`} className="px-4 py-2 rounded bg-zinc-100 hover:bg-zinc-200 text-zinc-700 font-medium border border-zinc-200 shadow-sm transition flex items-center gap-2">
          <span>← {prev.navTitle}</span>
          {sectionEmojis[prev.slug] && <span className="text-xl">{sectionEmojis[prev.slug]}</span>}
        </a>
      )}
      {!prev && <div />} 
      {next && (
        <a href={`/manual/${next.slug}`} className="px-4 py-2 rounded bg-zinc-100 hover:bg-zinc-200 text-zinc-700 font-medium border border-zinc-200 shadow-sm transition flex items-center gap-2">
          {sectionEmojis[next.slug] && <span className="text-xl">{sectionEmojis[next.slug]}</span>}
          <span>{next.navTitle} →</span>
        </a>
      )}
    </div>
  );
}
