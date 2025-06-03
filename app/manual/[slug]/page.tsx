// This is now a Server Component. No "use client" here.
import { getSectionData, ManualSection, manualSections as allManualSections, sectionEmojis } from '@/lib/manual-content'; 
import { notFound } from 'next/navigation';
import ManualPageClient from './ManualPageClient'; // Import the new client component
import SectionContentWrapper from '@/components/SectionContentWrapper'; // Assuming this is fine in server component

// Keep generateStaticParams for static site generation
export async function generateStaticParams(): Promise<{ slug: string }[]> { 
  return allManualSections.map((section: ManualSection) => ({
    slug: section.slug,
  }));
}

interface ManualPageProps {
  params: { slug: string }; // Direct access to slug
}

// This is the main Server Component for the page
export default async function ManualPage({ params }: ManualPageProps) {
  const slug = params.slug;
  const section = getSectionData(slug);

  if (!section) {
    notFound(); 
  }

  return (
    <>
      {/* Pass section data and slug to the client component */}
      <ManualPageClient section={section} slug={slug} />
      
      {/* SectionNavigation can be rendered here if it doesn't need client state from ManualPageClient */}
      <SectionContentWrapper> {/* If navigation is outside the main article but within the wrapper */}
        <div className="flex flex-col items-center gap-4 mt-14 mb-8">
          <SectionNavigation currentSlug={slug} />
        </div>
      </SectionContentWrapper>
    </>
  );
}

// Navigation component (can remain in this file if it's simple and doesn't need client hooks)
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
