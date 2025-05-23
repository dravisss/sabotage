import SabotageQuiz from '@/components/SabotageQuiz';
import { manualSections } from '@/lib/manual-content'; 
import { Metadata } from 'next';

// Helper function to find section data
const findSection = (slug: string) => manualSections.find(sec => sec.slug === slug);

export async function generateMetadata(): Promise<Metadata> {
  const section = findSection('sabotador-interno');
  return {
    title: section ? `${section.pageTitle} | Manual de Sabotagem Corporativa` : 'Quiz | Manual de Sabotagem Corporativa',
  };
}

export default function SabotadorInternoPage() {
  const section = findSection('sabotador-interno');

  return (
    <div className="container mx-auto px-4 py-8">
      {section && (
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold font-title text-zinc-800">{section.pageTitle}</h1>
          {section.introSubtitle && (
            <p className="text-xl text-zinc-600 mt-2 font-sans">{section.introSubtitle}</p>
          )}
        </header>
      )}
      <SabotageQuiz />
    </div>
  );
}
