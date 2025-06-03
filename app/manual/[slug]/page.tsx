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

type Props = {
  params: Promise<{ slug: string }>; // Expect params to be a Promise
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>; // If present, searchParams is also a Promise
};

// This is the main Server Component for the page
export default async function ManualPage({ params: paramsPromise }: Props) { 
  const params = await paramsPromise; // Await the promise to get the actual params object
  const slug = params.slug;
  const originalSection = getSectionData(slug); // Get the original section data

  if (!originalSection) {
    notFound(); 
  }

  // Prepare section data for the client component (ensure it's serializable)
  const sectionForClient = { ...originalSection };

  // Nullify Icon properties to ensure serializability for any disclaimers/finalDisclaimers
  if (sectionForClient.disclaimer && typeof sectionForClient.disclaimer.Icon === 'function') {
    sectionForClient.disclaimer = { ...sectionForClient.disclaimer, Icon: undefined };
  }

  const FinalDisclaimerIconComponent = originalSection.finalDisclaimer?.Icon;
  if (sectionForClient.finalDisclaimer && typeof sectionForClient.finalDisclaimer.Icon === 'function') {
    sectionForClient.finalDisclaimer = { ...sectionForClient.finalDisclaimer, Icon: undefined };
  }

  // If this is the 'encerramento' page, we'll render finalDisclaimer separately in this server component,
  // so remove it from the data passed to the client component to avoid double rendering by ManualPageClient.
  if (slug === "encerramento") {
    sectionForClient.finalDisclaimer = undefined;
  }

  return (
    <>
      {/* ManualPageClient receives section data that is guaranteed to be serializable */}
      <ManualPageClient section={sectionForClient} slug={slug} />
      
      {/* Render the finalDisclaimer specifically for the 'encerramento' page here in the Server Component */}
      {slug === "encerramento" && originalSection.finalDisclaimer && FinalDisclaimerIconComponent && (
        <SectionContentWrapper>
          <div className="mt-12 p-6 bg-yellow-50 border border-yellow-300 rounded-lg shadow-md text-sm">
            <h3 className="text-lg font-semibold text-yellow-800 flex items-center">
              <FinalDisclaimerIconComponent className="w-5 h-5 mr-2 text-yellow-700" />
              {originalSection.finalDisclaimer.title}
            </h3>
            <div className="mt-2 text-yellow-700 prose prose-sm prose-yellow" dangerouslySetInnerHTML={{ __html: originalSection.finalDisclaimer.description }} />
          </div>
        </SectionContentWrapper>
      )}
      
      {/* SectionNavigation can be rendered here */}
      <SectionContentWrapper>
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
